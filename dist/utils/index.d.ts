/**
 * 节流函数
 * @param fn 需要节流的函数
 * @param delay 延迟时间（毫秒）
 */
export declare function throttle<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void;
/**
 * 深拷贝函数
 * @param obj 需要深拷贝的对象
 */
export declare function deepClone<T>(obj: T): T;
/**
 * 两数相加
 * @param a 第一个数
 * @param b 第二个数
 * @returns 两数之和
 */
export declare function add(a: number, b: number): number;
/**
 * 两数相减
 * @param a 第一个数
 * @param b 第二个数
 * @returns 两数之差
 */
export declare function subtract(a: number, b: number): number;
/**
 * 两数相乘
 * @param a 第一个数
 * @param b 第二个数
 * @returns 两数之积
 */
export declare function multiply(a: number, b: number): number;
/**
 * 两数相除
 * @param a 第一个数
 * @param b 第二个数
 * @returns 两数之商
 * @throws {Error} 当除数为0时抛出错误
 */
export declare function divide(a: number, b: number): number;
