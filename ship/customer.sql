-- 로그인 + 게시판

drop table shipmember;
drop sequence shipmember_seq;

drop table shipboard;
drop sequence shipboard_seq;

create table shipmember
(
    memberseq number unique,
    memberid varchar2(30) primary key,
    memberpw varchar2(100) not null,
    membername varchar2(30) not null,
    membertype varchar2(20) default 'individual' check(membertype in('corporation','individual')),
    corpname varchar2(50),
    email varchar2(50),
    enabled number(1) default 1 check (enabled in (1,0)),
    rolename varchar2(20) default 'basic_user' check(rolename in ('basic_user','premium_user'))
);
create sequence shipmember_seq;


create table shipboard
(
    boardseq number primary key,    -- 게시글 번호
    memberid varchar2(30),  -- 작성자id
    title varchar2(200) default '제목 없음', -- 글 제목. 사실 default를 쓰면 not null을 안 걸어도 됨
    boardtext varchar2(4000) not null,  -- 글 내용. varchar2의 최대 길이는 4000
    regdate date default sysdate,   -- 작성일자
    hitcount number default 0,  -- 조회수
    originalfile varchar2(200), -- 첨부파일 원래 이름. 파일은 하드디스크에 따로 저장하고 테이블엔 이름만 저장할것임
    savedfile varchar2(200) unique -- 첨부파일이 서버에 저장될 때 파일명
);
create sequence shipboard_seq;