import React from 'react';

// class Header extends React.Component {
//     render() {
//         return (
//             <header className='top'>
//                 <h1>
//                     Catch 
//                     <span className="ofThe">
//                         <span className="of">of</span>
//                         <span className="the">the</span>
//                     </span>
//                     day
//                 </h1>
//                 <h3 className="tagline"><span>{this.props.tagline}</span></h3>
//             </header> 
//         )
//     }
// }

// stateless functional
const Header = (props) => {
    return (
        <header className='top'>
            <h1>
                Catch 
                <span className="ofThe">
                    <span className="of">of</span>
                    <span className="the">the</span>
                </span>
                day
            </h1>
            <h3 className="tagline"><span>{props.tagline}</span></h3>
        </header> 
    )
}

// props

// hoisting

// Header1(someProps)

// function Header1 (props) {
//     return (
//         <header></header>
//     )
// }

// Header2(someProps)

// const Header2 = function (props) {
//     return (
//         <header></header>
//     )
// }

// const Header3 = (props) => <header></header>

// const Header4 = (props) => {
//     alifjewaij
//     oaijwefoiawjf
//     awoeifja
//     wf
//     return (
//         <header></header>
//     )
// }


        

export default Header;