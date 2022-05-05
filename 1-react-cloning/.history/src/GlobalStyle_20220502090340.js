/**
 * @filename: GlobalStyle.js
 * @description: 글로벌스타일지정
 * @author: Hess
 */
/** 패키지 참조 */
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

*{
box-sizing: border-box;
font-family: 'Times New Roman', Georgia, Serif;
list-style: none;
}
body{
margin:0;
padding:0;
font-size:20px;
font-family: 'Times New Roman', Georgia, Serif;
line-height: 1.5;

}

a {
  padding: 5px;
  text-decoration: none;
  color: black;
}
a:hover {
  background-color: lightgray;

  border-radius: 1px;
}
.btn{
padding:10px 20px;
}
.btn:hover{
background:#ccc;
color:#000;
}
`;
export default GlobalStyle;
