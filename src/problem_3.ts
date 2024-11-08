{


  function countWordOccurrences(sentence: string, word: string): number {
    const normalizedSentence = sentence.toLowerCase();
    const normalizedWord = word.toLowerCase();

    const wordsArray = normalizedSentence.split(' ');
    const wordCount = wordsArray.filter((w) => w === normalizedWord).length;

    return wordCount;
  }

}
