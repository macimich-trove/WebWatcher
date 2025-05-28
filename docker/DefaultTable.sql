CREATE TABLE LoggedCrawls (
    TargetUrl INT NOT NULL,
    ElementsCrawled INT,
    Elements TEXT[],
    CrawlTime REAL NOT NULL,
    RegexPattern VARCHAR(255)
);



