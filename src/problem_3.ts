{
  // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

  function countWordOccurrences(sentence: string, word: string): number {
    const normalizedSentence = sentence.toLowerCase();
    const normalizedWord = word.toLowerCase();

    const wordsArray = normalizedSentence.split(' ');
    const wordCount = wordsArray.filter((w) => w === normalizedWord).length;

    return wordCount;
  }

}
