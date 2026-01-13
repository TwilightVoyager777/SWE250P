function start() {
    class Bookmark extends React.Component {
        constructor(props) {
            super(props);
            console.log("Bookmark component created");
        }
        static defaultProps = {description : "Unknown"}
        static propTypes = {title: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            description: PropTypes.string};
        title = this.props.title;
        titleStyle = {color : "red"}
        render() {
            return (
                <li>
                    <h2 style={this.titleStyle}>{this.title}</h2>
                    <a href ={this.props.href}>
                        {this.props.description || "Unknown"}
                    </a>
                    <button onClick={() => {
                        this.title = this.title + "-CHANGED";
                        this.setState({});
                    }}>
                       Click me
                       </button>
                </li>
            );
        }
    }
    ReactDOM.render(
        <div>
            <h1>Bookmarks</h1>
            <ul>
                <Bookmark title = {"Etherientxpc"}
                          href = {"https://www.etherient.com"}
                          description = {"The home page of Etherient"}
                />
                <Bookmark title = {"Baidu"}
                          href = {"https://www.baidu.com"}
                          description = {"The home page of baidu"}
                />
            </ul>
        </div>,
        document.getElementById("mainContainer")
    )
}
// npx babel main.jsx --out-file main.js