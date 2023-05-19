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
export declare function francAll(value: string, options?: IOptions): any;
/**
 * --- 判断一段文本的语言 ---
 * @param value 要判断的文本
 * @param options 选项
 */
export declare function franc(value: string, options?: IOptions): string;
export {};
