declare module 'google-trends-api' {
  export const google: {
    interestOverTime(options: {
      keyword: string | string[];
      startTime?: Date;
      endTime?: Date;
      geo?: string;
      hl?: string;
      timezone?: number;
      category?: number;
      property?: string;
    }): Promise<string>;

    interestByRegion(options: {
      keyword: string | string[];
      startTime?: Date;
      endTime?: Date;
      geo?: string;
      resolution?: string;
      hl?: string;
      timezone?: number;
      category?: number;
      property?: string;
    }): Promise<string>;

    relatedQueries(options: {
      keyword: string | string[];
      startTime?: Date;
      endTime?: Date;
      geo?: string;
      hl?: string;
      timezone?: number;
      category?: number;
      property?: string;
    }): Promise<string>;

    relatedTopics(options: {
      keyword: string | string[];
      startTime?: Date;
      endTime?: Date;
      geo?: string;
      hl?: string;
      timezone?: number;
      category?: number;
      property?: string;
    }): Promise<string>;
  };
}