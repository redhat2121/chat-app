import React, { memo } from 'react';
import { Button } from 'rsuite';
import TimeAgo from 'timeago-react';
import PresenceDot from '../../PresenceDot';
import ProfileAvatar from '../../ProfileAvatar';
import ProfileinfoBtnModal from './ProfileinfoBtnModal';
import { useCurrentRoom } from '../../../context/current-room-context';
import { auth } from '../../../misc/firebase';
import { useHover } from '../../../misc/custom-hooks';

const MessageItem = ({ message, handleAdmin }) => {
  const { author, createdAt, text } = message;
  const [selfRef, isHover] = useHover();
  const isAdmin = useCurrentRoom(v => v.isAdmin);
  const admins = useCurrentRoom(v => v.admins);

  const isMsgAuthAdmin = admins.includes(author.uid);
  const IsAuthor = auth.currentUser.uid === author.uid;
  const canGrantAdmin = isAdmin && !IsAuthor;

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
      </div>
      <div>
        <span className="word-breal-all">{text}</span>
      </div>
    </li>
  );
};

export default memo(MessageItem);
