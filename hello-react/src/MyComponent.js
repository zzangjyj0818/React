const MyComponent = ({name, children}) => {
    return (
        <>
        안녕하세요, 제 이름은 {name} 입니다. <br/>
        children 값은 {children} 입니다.
        {/* 태그 사이의 내용을 보여주는 children */}
        
        </>
    );
};

MyComponent.defaultProps = { name: '기본이름' };
/* default props =>  props에 value가 없을때, 기본값을 보여줌*/

export default MyComponent;
