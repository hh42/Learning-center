##  ReactJs

--
--  

### # About super() function

--  
  * Syntax :  
    - super([arguments]); // calls the parent constructor.  
    - super.functionOnParent([arguments]);  
  
  * When used in a constructor, the 'super' keyword appears alone and must be used before the 'this' keyword can be used, else 
  ReferenceError is thrown 
  * More information at : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

  * Use props :   
     - to use 'this.props' in the constructor, you need to pass props to super.
     - Otherwise, it doesn't matter because React sets .props on the instance from the outside immediately after calling the constructor.
  * Answered here : https://discuss.reactjs.org/t/should-we-include-the-props-parameter-to-class-constructors-when-declaring-components-using-es6-classes/2781

--

### # ReactJS best practice 2016  

--  

  * See : http://blog.js-republic.com/react-js-best-practices-2016/
