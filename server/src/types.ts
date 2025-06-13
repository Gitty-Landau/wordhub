export type DictionaryReturn = Array<{
  meta: {
    id: string;
    uuid: string;
    sort: string;
    src: string;
    section: string;
    stems: string[];
    offensive: boolean;
  };
  hom: number;
  hwi: {
    hw: string;
  };
  fl: string;
  def: Array<{
    sseq: Array<
      Array<
        | [
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
            }
          ]
      >
    >;
  }>;
  et: Array<["text", string]>;
  date: string;
  shortdef: string[];
}>;

export type Word = {
  id: string;
  offensive: boolean;
  hw: string;
  fl: string;
  shortdef: string[];
};
