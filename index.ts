export function merge(
  collection_1: number[],
  collection_2: number[]
): number[] {
  let result: number[] = [];
  let curr_1: number = 0;
  let curr_2: number = 0;
  for (let i = 0; i < collection_1.length; i++) {
    for (let j = curr_2; j < collection_2.length; j++) {
      //chose the lower number to push in array
      if (collection_1[i] >= collection_2[j]) {
        result.push(collection_2[j]);
        curr_2++;
      } else {
        result.push(collection_1[i]);
        //store the first index of collection_1 which isn't in result
        curr_1 = i + 1;
        break;
      }
    }
  }
  //push the rest in collection_1 in result
  for (let i = curr_1; i < collection_1.length; i++) {
    result.push(collection_1[i]);
  }
  //push the rest in collection_2 in result
  for (let i = curr_2; i < collection_2.length; i++) {
    result.push(collection_2[i]);
  }
  return result;
}
