declare module 'newsapi' {
    interface Article {
      // Define the properties of the Article object based on the API response
      // Example: title: string;
      // Example: description: string;
      // Example: ...
    }
  
    interface NewsResponse {
      status: string;
      articles: Article[];
    }
  
    export default class NewsAPI {
      constructor(apiKey: string);
      v2: {
        topHeadlines(options: object): Promise<NewsResponse>;
        everything(options: object): Promise<NewsResponse>;
        sources(options: object): Promise<NewsResponse>;
      };
    }
  }