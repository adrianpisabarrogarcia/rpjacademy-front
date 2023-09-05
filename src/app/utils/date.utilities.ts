export class DateUtilities {
  /**
   * Description: Convert a string to a date object
   * @param input - string
   * @returns - date object
   */
  static fromStringToDate(input: string): Date {
    const date = new Date(input);
    return date;
  }

  /**
 * Description: Convert a date object to a string in a long spanish format
 * @param input - date
 * @returns - string
 */
  static longDate(input: Date): string {
    return input.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

}
