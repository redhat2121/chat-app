import React, { memo } from 'react';
import { Button } from 'rsuite';
import TimeAgo from 'timeago-react';
import PresenceDot from '../../PresenceDot';
import ProfileAvatar from '../../ProfileAvatar';
import ProfileinfoBtnModal from './ProfileinfoBtnModal';
import { useCurrentRoom } from '../../../context/current-room-context';
import { auth } from '../../../misc/firebase';
import { useHover, useMediaQuery } from '../../../misc/custom-hooks';
import IconBtnControl from './IconBtnControl';
import ImgBtnModal from './imgBtnModal';

const renderFileMsg = file => {
  if (file.contentType.includes('image')) {
    return (
      <div className="height-220">
        <ImgBtnModal src={file.url} fileName={file.name} />
      </div>
    );
  }

  return <a href={file.url}>Download [file.name]</a>;
};

const MessageItem = ({ message, handleAdmin, handleLike, handleDelete }) => {
  const { author, createdAt, text, file, likes, likeCount } = message;
  const [selfRef, isHover] = useHover();
  const isMobile = useMediaQuery('(max-width: 992px)');
  const isAdmin = useCurrentRoom(v => v.isAdmin);
  const admins = useCurrentRoom(v => v.admins);

  const isMsgAuthAdmin = admins.includes(author.uid);
  const IsAuthor = auth.currentUser.uid === author.uid;
  const canGrantAdmin = isAdmin && !IsAuthor;
  const isLiked = likes && Object.keys(likes).includes(auth.currentUser.uid);
  const canShowIcons = isMobile || isHover;

  return (
    <li
      className={`padded mb-1 cursor-pointer ${isHover ? 'bg-black-02' : '  '}`}
      ref={selfRef}
    >
      <div className="d-flex align-items-center font-bolder mb-1">
        <PresenceDot uid={author.uid} />

        <ProfileAvatar
          src={author.avatar}
          name={author.name}
          className="ml-1"
          size="xs"
        />
        <ProfileinfoBtnModal
          profile={author}
          appearance="link"
          className="p-0 ml-1 text-black"
        />
        {canGrantAdmin && (
          <Button block onClick={() => handleAdmin(author.uid)} color="blue">
            {isMsgAuthAdmin
              ? 'Remove admin permission'
              : 'Give admin in this room'}
          </Button>
        )}

        <TimeAgo
          datetime={createdAt}
          className="font-normal text-black-45 ml-2"
        />
        <IconBtnControl
          {...(isLiked ? { color: 'red' } : {})}
          isVisible={canShowIcons}
          iconName="heart"
          tooltip="like this message"
          onClick={() => handleLike(message.id)}
          badgeContent={likeCount}
        />
        {IsAuthor && (
          <IconBtnControl
            isVisible={canShowIcons}
            iconName="close"
            tooltip="Delete this message"
            onClick={() => handleDelete(message.id)}
          />
        )}
      </div>
      <div>
        {text && <span className="word-breal-all">{text}</span>}
        {file && renderFileMsg(file)}
      </div>
    </li>
  );
};

export default memo(MessageItem);
