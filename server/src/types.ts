export type DictionaryReturn =
  | Array<{
      meta: {
        id: string;
        uuid: string;
        src: string;
        section: string;
        target?: {
          tuuid: string;
          tsrc: string;
        };
        stems: string[];
        syns: string[][];
        ants: string[][];
        offensive: boolean;
      };
      hwi: {
        hw: string;
      };
      fl: string;
      def: Array<{
        sseq: Array<
          Array<
            [
              "sense",
              {
                dt: Array<
                  | ["text", string]
                  | [
                      "vis",
                      Array<{
                        t: string;
                      }>
                    ]
                >;
                syn_list?: Array<
                  Array<{
                    wd: string;
                  }>
                >;
                rel_list?: Array<
                  Array<{
                    wd: string;
                  }>
                >;
                near_list?: Array<
                  Array<{
                    wd: string;
                  }>
                >;
                ant_list?: Array<
                  Array<{
                    wd: string;
                  }>
                >;
              }
            ]
          >
        >;
      }>;
      shortdef: string[];
    }>
  | undefined;

export type Word = {
  id: string;
  offensive: boolean;
  hw: string;
  fl: string;
  shortdef: string[];
};
