export class StringUtilities {
  /**
   * Description: Remove HTML tags from a string
   * @param input - string to remove HTML tags from
   * @returns - string without HTML tags
   */
  static removeHtmlTags(input: string): string {
    return input.replace(/<\/?[^>]+(>|$)/g, '').trim();
  }

  /**
   * Description: Shorten a string to a given number of characters
   * @param input - string to shorten
   * @param charsNumber - number of characters to shorten the string to
   * @returns - shortened string if the input string is longer than the given number of characters, otherwise the input string
   */
  static shortText(input: string, charsNumber: number): string {
    return input.length > charsNumber ? input.substring(0, charsNumber) + '...' : input;
  }

}
