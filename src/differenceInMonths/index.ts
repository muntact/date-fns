import toDate from '../toDate/index'
import differenceInCalendarMonths from '../differenceInCalendarMonths/index'
import compareAsc from '../compareAsc/index'

/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
export default function differenceInMonths(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number
): number {
  const dateLeft = toDate(dirtyDateLeft)
  const dateRight = toDate(dirtyDateRight)

  const sign = compareAsc(dateLeft, dateRight)
  const difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
  const result = sign * (difference - (isLastMonthNotFull ? 1 : 0))
  // Prevent negative zero
  return result === 0 ? 0 : result
}