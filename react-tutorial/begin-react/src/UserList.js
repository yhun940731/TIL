import React from 'react';

const User = React.memo(function User({user, onRemove, onToggle}) {
  const {username, email, id, active} = user;

  // 빈 배열이 두번째 인수일 시 컴포넌트가 나타나고 사라질 떄 동작됨
  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남');
  //   return () => {
  //     console.log('컴포넌트가 화면에서 사라짐');
  //   };
  // }, []);

  // 두번째 인수로 사용할 값을 줘야 최신화되는 값을 사용할 수 있음.
  // useEffect(() => {
  //   console.log('user 값이 설정됨');
  //   console.log(user);
    
  //   return () => {
  //     console.log('user 값이 바뀌기 전');
  //     console.log(user);
  //   };
  // }, [user]);

  return (
    <div>
    <b style={{
      color: active ? 'green' : 'black',
      cursor: 'pointer'
    }}
      onClick={()=> onToggle(id)}
    >
      {username}
      </b>
      &nbsp;
      <span>({email})</span>
    <button onClick={() => onRemove(id)}>삭제</button>
  </div>
  );
});

function UserList({users, onRemove, onToggle}) {
  return (
    <div>
      {/* props를 이용한 노가다 */}
      {/* <User user={users[0]}/>
      <User user={users[1]}/>
      <User user={users[2]}/> */}

      {
        users.map(
          // 고유값인 key 가용해야함 key값이 없다면 인덱스를 key로 사용(하지만 인덱스는 지양한다)
          user => (<User
                      user={user}
                      key={user.id}
                      onRemove={onRemove}
                      onToggle={onToggle}
                    />)
          // (user, i) => (<User user={user} key={i}/>)
        )
      }
    </div>
  )
}

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
);