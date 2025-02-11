class AssistantMarketUrl {
  private readonly baseUrl: string;

  /**
   * @param baseUrl - 基础 URL，默认为 npmmirror 的 @lobehub/agents-index 根路径
   */
  constructor(baseUrl: string = 'https://registry.npmmirror.com/@lobehub/agents-index') {
    this.baseUrl = baseUrl;
  }

  /**
   * 获取索引文件的 URL。
   * @param version - 版本号，例如 "1.30.0"
   * @param lang - 语言代码，默认为 "en"
   * @returns 索引文件的完整 URL
   */
  getIndexUrl(version: string, lang: string = 'en'): string {
    const basePath = `${this.baseUrl}/${version}/files/public`;
    if (lang.startsWith('zh')) {
      return `${basePath}/index.zh-CN.json`;
    }
    return `${basePath}/index.json`;
  }

  /**
   * 获取特定代理的 URL。
   * @param identifier - 代理的标识符
   * @param version - 版本号
   * @param lang - 语言代码
   * @returns 代理文件的完整 URL
   */
  getAssistantUrl(identifier: string, version: string, lang: string = 'en'): string {
    const basePath = `${this.baseUrl}/${version}/files/public`;
    if (lang.startsWith('zh')) {
      return `${basePath}/${identifier}.zh-CN.json`;
    }
    return `${basePath}/${identifier}.json`;
  }
}

export default AssistantMarketUrl;
