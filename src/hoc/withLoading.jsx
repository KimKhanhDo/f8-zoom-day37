import Loading from '@/components/Loading';

function withLoading(WrappedComponent) {
    const EnhancedComponent = (props) => {
        const { isLoading, ...rest } = props;
        if (isLoading) return <Loading />;

        return (
            <WrappedComponent
                isLoading={isLoading}
                {...rest}
            />
        );
    };

    EnhancedComponent.displayName = `withLoading(${
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`;

    // Trả về component mới có tính năng loading
    return EnhancedComponent;
}

export default withLoading;

/**
 * Add display name for debugging:
 *  - WrappedComponent.name: tên hàm hoặc class name của component gốc.
 * 
        * function Hello() {
            return <h1>Hello</h1>;
        }
        console.log(Hello.name); // 👉 "Hello"
    * 
*  - WrappedComponent.displayName: thuộc tính tĩnh (static property) của React component
*    có thể gán thủ công để hiển thị tên dễ đọc trong React DevTools hoặc logs.
* 
        * function Hello() {
            return <h1>Hello</h1>;
        }
        Hello.displayName = "XinChao";
        console.log(Hello.displayName); // 👉 "XinChao"
    */
