import React, { ChangeEvent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { fetchAllComments } from '../../../store/actions/commentActions';
import { StoreState } from '../../../store/reducers';
import { Comment } from '../../../store/actions/commentActions';
import { User } from '../../../store/actions/userActions';
import { Photo } from '../../../store/actions/photoActions';
import FollowedButton from '../../common/followedButton/FollowedButton';
import Input from '../../common/input/Input';
import ResumeList from './ResumeList';
import {
  Container,
  FeaturesContainer,
  TitleContainer,
  TopContainer
} from '../../../helper/styled/ResumeViewComponents';
import BarContainer from './BarContainer';

interface IProps {
  title?: string;
  fetchAllComments: Function;
  showHamburgerMenu: boolean;
  placeholderTitle: string;
  isComponentsBar: boolean;
  comments: Comment[];
  userList: User[];
  photos: Photo[];
}

interface Resume {
  body: string;
  commentName: string;
  name: string;
  username: string | undefined;
  photoUrl: string;
}

const ResumeView = (props: IProps) => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [activePage, setActivePage] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchUsernameTerm, setSearchUsernameTerm] = useState<string>('');

  const {
    fetchAllComments,
    showHamburgerMenu,
    placeholderTitle,
    isComponentsBar,
    comments,
    userList,
    photos,
  } = props;

  useEffect(() => {
    fetchAllComments();
  }, [fetchAllComments]);

  useEffect(() => {
    const result: Resume[] = [];
    comments.forEach((comment: Comment): void => {
      if(comment) {
        const { postId, body } = comment;
        const commentName = comment.name;

        const foundUser = userList.filter((user: User): boolean => user.id === postId);
        if(foundUser[0] && foundUser[0].username) {
          const { name, username } = foundUser[0];

          const foundPhoto = photos.filter((photo: Photo): boolean => photo.id === postId);
          if(foundPhoto[0]) {
            const resumeObject: Resume = { body, commentName, name, username, photoUrl: foundPhoto[0].url };
            result.push(resumeObject);
          }
        }
      }
    });
    setResumes(result);
  }, [comments, userList, photos]);

  const editSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setSearchTerm(value === null ? '' : value);
  }

  const handlePageChange = (data: any) => {
    setActivePage(data.selected);
  }

  const dynamicSearch = () => {
    return resumes.filter(
      (resume: Resume): boolean => {
        return resume.commentName.toLowerCase().includes(searchTerm.toLowerCase())
          &&
          resume.name.toLowerCase().includes(searchUsernameTerm.toLowerCase())
      });
  }

  const PER_PAGE = 10;
  const offset = activePage * PER_PAGE;
  const pageCount = Math.ceil(resumes.length / PER_PAGE);

  return (
    <Container>
      <TopContainer>
        <TitleContainer style={{ fontSize: showHamburgerMenu ? '2.5vw' : '1vw' }}>{placeholderTitle}</TitleContainer>
        <FeaturesContainer>
          <Input placeholder="Filter by title..." value={searchTerm} onChange={editSearchTerm} />
          <FollowedButton showHamburgerMenu={showHamburgerMenu} setSearchTerm={setSearchUsernameTerm} />
        </FeaturesContainer>
      </TopContainer>
      {
        isComponentsBar && (
          <BarContainer />
        )
      }
      <div className="pagination" style={{width: '100%'}}>
        <div style={{marginBottom: 25, width: '100%'}}>
          <ResumeList
            offset={offset}
            resumes={dynamicSearch()}
            PER_PAGE={PER_PAGE}
            showHamburgerMenu={showHamburgerMenu}
            isComponentsBar={isComponentsBar}
          />
        </div>
      </div>
      <ReactPaginate
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </Container>
  );
}

function mapStateToProps(state: StoreState) {
  return {
    comments: state.comments.comments,
    userList: state.user.userList,
    photos: state.photos.photos,
  };
}

export default connect(mapStateToProps, { fetchAllComments })(ResumeView);
