let thisInArrowFunction = () => {
    let inside = () => {
        console.log(this);
    };
    inside();
};

thisInArrowFunction();  // Window


