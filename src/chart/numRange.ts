// Copyright (c) 2022 Onur Cinar. All Rights Reserved.
// https://github.com/cinar/indicatorts

/**
 * Numeric range.
 */
export class NumRange {
  private min: number;
  private max: number;

  /**
   * Constructor.
   * @param {number} min min value.
   * @param {number} max max value.
   */
  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  /**
   * Gets the min value.
   * @return {number} min value.
   */
  getMin(): number {
    return this.min;
  }

  /**
   * Gets the max value.
   * @return {number} max value.
   */
  getMax(): number {
    return this.max;
  }

  /**
   * Calculates the span of the range.
   * @return {number} span value.
   */
  span(): number {
    return this.max - this.min;
  }

  /**
   * Merge function merges the given ranges.
   * @param {NumRange[]} ranges range objects.
   * @return {NumRange} merged ranges.
   */
  static merge(ranges: NumRange[]): NumRange {
    return ranges.reduce((p, c) => new NumRange(
        Math.min(p.min, c.min),
        Math.max(p.max, c.max),
    ));
  }

  /**
   * From function returns the range of the values.
   * @param {number[]} values values array.
   * @return {NumRange} range of the values.
   */
  static from(values: number[]): NumRange {
    return new NumRange(
        Math.min(...values),
        Math.max(...values),
    );
  }
}

