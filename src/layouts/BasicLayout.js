import Top from "./Top";


const BasicLayout = ({ children }) => {
    return (
            
            <div className="mx-auto">
            <Top></Top>
            <div className="max-w-screen-2xl mx-auto">
                <main>{children}</main>
            </div>
            </div>


    )

};

export default BasicLayout;