import Top from "./Top";


const BasicLayout = ({ children }) => {
    return (
            
            <div className="mx-auto">
                <Top></Top>
                <main>{children}</main>
            </div>


    )

};

export default BasicLayout;