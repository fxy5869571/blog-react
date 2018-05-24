import * as React from "react";
interface IArticle {
  article: object;
}
class Article extends React.Component<IArticle> {
  constructor(props: IArticle) {
    super(props);
  }
  componentDidMount() {}
  render() {
    console.log(this.props);
    return <div>article</div>;
  }
}

export default Article;
