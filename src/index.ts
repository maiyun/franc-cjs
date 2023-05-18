import * as pkgFranc from './pkg/index';

interface IOptions {
    'only'?: string[];
    'ignore'?: string[];
    'minLength'?: number;
}

/**
 * --- 判断一段文本的语言可能性列表 ---
 * @param value 要判断的文本
 * @param options 选项
 */
export function francAll(value: string, options: IOptions = {}) {
    const list = pkgFranc.francAll(value, options);
    if (list[0][0] === 'bul') {
        // --- 判断是不是保加利亚语 ---
        if (inArray(value, ['ё', 'ы', 'э'])) {
            list.splice(0, 1);
        }
    }
    if (list[0][0] === 'mkd') {
        // --- 判断是不是保加利亚语 ---
        if (inArray(value, ['ё', 'ы', 'э', 'ъ', 'ь', 'й', 'щ'])) {
            list.splice(0, 1);
        }
    }
    return list;
}

/**
 * --- 判断一段文本的语言 ---
 * @param value 要判断的文本
 * @param options 选项
 */
export function franc(value: string, options: IOptions = {}): string {
    return francAll(value, options)[0][0];
}

/**
 * --- 判断字符串中是否存在数组中的字符 ---
 * @param str 要判断的字符串
 * @param arr 字符列表数组
 */
function inArray(str: string, arr: string[]): boolean {
    for (const char of arr) {
        if (!str.includes(char)) {
            continue;
        }
        return true;
    }
    return false;
}