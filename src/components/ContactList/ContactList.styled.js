import styled from 'styled-components';

export const ContactList = styled.ul`
  .contactList {
    list-style: none;
    margin-top: 30px;
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 300px;
    overflow-y: scroll;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
  .contactList::-webkit-scrollbar {
    width: 8px;
  }
  .contactList::-webkit-scrollbar-track {
    background: transparent;
  }
  .contactList::-webkit-scrollbar-thumb {
    background-color: #d5d5d5;
    border-radius: 20px;
  }
  .contactItem {
    position: relative;
    font-size: 20px;
    width: 450px;
  }
  .deleteBtn {
    position: absolute;
    top: 2px;
    right: 0;
    font-size: 15px;
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
