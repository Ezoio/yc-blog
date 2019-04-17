<template>

    <div class="main container">
        <div class="row ">
            <div class="col-sm-9 mt-4">
                <div class="card border-light">
                    <div class="card-header bg-dark border-primary font-weight-bold pl-3 text-white"><h5>
                        {{article.title}}</h5></div>
                </div>
                <div class="card-body text-muted border-secondary border-bottom">
                    <b class="d-inline-block"><i class="material-icons float-left text-primary mr-2 ">schedule</i> 2019-04-15 14:41:55.0</b>
                    <b class="d-inline-block ml-3"><i class="material-icons float-left text-primary mr-2 ">face</i> 18</b>
                    <b class="d-inline-block ml-3"><i class="material-icons float-left text-primary mr-2 ">comment</i> 0</b>
                    <b class="d-inline-block ml-3"><i class="material-icons float-left text-primary mr-2 ">favorite_border</i>0</b>
                    <button class="float-right btn btn-simple btn-danger btn-sm mr-2">添加至喜欢</button>
                </div>
                <div class="px-4 py-4">
                                                        <div class=" fmt " style="padding: 0px;">
                                                            <blockquote>
                                                                <p>抽象工厂模式设计的一款工具项目，方便快速实现html转PDF、doc转PDF等功能</p>
                                                            </blockquote>
                                                            <p>项目源代码：<a href="[https://github.com/liumapp/simple-convert](https://github.com/liumapp/simple-convert">github/simple-convert</a></p>
                                                            <h2 id="-">如何使用</h2>
                                                            <ul>
                                                                <li><p>使用Maven下载依赖</p> <pre><code class="lang-mxml">      &lt;dependency&gt;
                                            &lt;groupId&gt;com.liumapp.simple.convert&lt;/groupId&gt;
                                            &lt;artifactId&gt;simple-convert&lt;/artifactId&gt;
                                            &lt;version&gt;v1.0.0&lt;/version&gt;
                                          &lt;/dependency&gt;
                                    </code></pre> </li>
                                                                <li><p>拷贝repo目录到本地项目中，否则会提示找不到aspose的jar包</p> <p> 当然，您也可以自行将libs目录下的aspose这个jar包部署到自己的nexus私服或者导入maven的本地仓库中</p> </li>
                                                                <li><p>html转doc</p>
                                                                    <ul>
                                                                        <li><p>通过文件目录转换</p> <pre><code class="lang-java hljs">      BasicConverter converter = <span class="hljs-keyword">new</span> HtmlToPdfConverterFactory().getInstance();
                                          String htmlFilePath = HtmlToPdfConverterTest.class.getClassLoader().getResource(<span class="hljs-string">&quot;test.html&quot;</span>).getPath();
                                          String pdfResultPath = <span class="hljs-string">&quot;./result.pdf&quot;</span>;
                                          converter.convertByFilePath(htmlFilePath, pdfResultPath);
                                    </code></pre> <p> 执行后将htmlFilePath所指向的html文件转换为pdf文件，并保存在pdfResultPath路径下</p> </li>
                                                                        <li><p>通过输入流转换</p> <pre><code class="lang-java hljs">      BasicConverter converter = <span class="hljs-keyword">new</span> HtmlToPdfConverterFactory().getInstance();
                                          String targetFilePath = HtmlToPdfConverterTest.class.getClassLoader().getResource(<span class="hljs-string">&quot;test.html&quot;</span>).getPath();
                                          InputStream is = <span class="hljs-keyword">new</span> FileInputStream(targetFilePath);
                                          OutputStream os = <span class="hljs-keyword">new</span> FileOutputStream(<span class="hljs-keyword">new</span> File(<span class="hljs-string">&quot;./result2.pdf&quot;</span>));
                                          converter.convertByStream(is, os);
                                          os.flush();
                                          is.close();
                                          os.close();
                                    </code></pre> <p> 将要转换的html文件作为输入流输出，输出流为要存储的pdf文件输出流，也可以使用ByteArrayOutputStream暂存在内存中</p> </li>
                                                                        <li><p>通过base64转换</p> <pre><code class="lang-java hljs">      BasicConverter converter = <span class="hljs-keyword">new</span> HtmlToPdfConverterFactory().getInstance();
                                          String targetFilePath = HtmlToPdfConverterTest.class.getClassLoader().getResource(<span class="hljs-string">&quot;test.html&quot;</span>).getPath();
                                          InputStream is = <span class="hljs-keyword">new</span> FileInputStream(targetFilePath);
                                          String inputBase64 = Base64FileTool.inputStreamToBase64(is);
                                          String resultBase64 = converter.convertByBase64(inputBase64);
                                          is.close();
                                    </code></pre> <p> inputBase64为html文件内容的base64值，输出的resultBase64为转换后的pdf base64值</p> </li>
                                                                        <li><p>直接传入html字符串转pdf文件</p> <p> 同通过base64转换一样，将html字符串加密为base64值，将转换后的base64解密存储即可得到pdf文件</p> <pre><code class="lang-java hljs">       BasicConverter converter = <span class="hljs-keyword">new</span> HtmlToPdfConverterFactory().getInstance();
                                           String htmlContents = <span class="hljs-string">&quot;&lt;h3&gt;你的第一个html转PDF文档出来啦！！&lt;/h3&gt;\n&quot;</span> +
                                                   <span class="hljs-string">&quot;&lt;br&gt;\n&quot;</span> +
                                                   <span class="hljs-string">&quot;&lt;div style=\&quot;color: aquamarine\&quot;&gt;\n&quot;</span> +
                                                   <span class="hljs-string">&quot;    注意：html5以及css3的支持还不够完善！！！\n&quot;</span> +
                                                   <span class="hljs-string">&quot;&lt;/div&gt;\n&quot;</span>;
                                           String inputBase64 = Base64.getEncoder().encodeToString(htmlContents.getBytes());
                                           String resultBase64 = converter.convertByBase64(inputBase64);
                                           Base64FileTool.saveBase64File(resultBase64, <span class="hljs-string">&quot;./result10.pdf&quot;</span>);
                                    </code></pre> <p> Base64FileTool这个类来自于qtools-file依赖 </p> </li>
                                                                    </ul> </li>
                                                                <li><p>doc转pdf</p>
                                                                    <ul>
                                                                        <li><p>通过文件目录转换 </p> <pre><code class="lang-java hljs">    BasicConverter converter = <span class="hljs-keyword">new</span> DocToPdfConverterFactory().getInstance();
                                        converter.convertByFilePath(<span class="hljs-string">&quot;./data/test.doc&quot;</span>, <span class="hljs-string">&quot;./result4.pdf&quot;</span>);
                                    </code></pre> </li>
                                                                        <li><p>通过输入流转换</p> <pre><code class="lang-java hljs">      BasicConverter converter = <span class="hljs-keyword">new</span> DocToPdfConverterFactory().getInstance();
                                          FileInputStream is = <span class="hljs-keyword">new</span> FileInputStream(<span class="hljs-string">&quot;./data/test.doc&quot;</span>);
                                          FileOutputStream os = <span class="hljs-keyword">new</span> FileOutputStream(<span class="hljs-string">&quot;./result5.pdf&quot;</span>);
                                          converter.convertByStream(is, os);
                                          is.close();
                                          os.close();
                                    </code></pre> </li>
                                                                    </ul> </li>
                                                            </ul>
                                                            <h2 id="-">注意事项</h2>
                                                            <ul>
                                                                <li><p>在pom.xml中，不要使用system scope引入jar包，而要通过在项目设立一个maven本地仓库：repo目录，将所需要的第三方jar包deploy进去（不能直接从maven下载，原因你懂的）</p>
                                                                    <ul>
                                                                        <li><p>system scope引入的包，在使用jar-with-dependencies打包时将不会被包含，可以使用resources将本地包打进jar-with-dependencies</p> </li>
                                                                        <li><p>关于本地repositor的创建和使用，可以参考 <a href="http://www.liumapp.com/articles/2019/04/12/1555053553824.html">这里</a></p> </li>
                                                                    </ul> </li>
                                                                <li><p>html转PDF的功能还不够完善，不能完美支持：html5 + css3（或者说能够完美支持html5 + css3的破解版本还没有出来）</p> </li>
                                                                <li><p>所有转换默认是以A4纸作为最终的PDF页面大小，如果要进行更改的话，请直接使用BasicConverter的getDocument和getDocumentBuilder方法，在获取到Document对象或者DocumentBuilder对象后，修改pageSetup的相关属性，具体请参考aspose的<a href="https://apireference.aspose.com/java/words">文档</a></p> <p> 或者直接参考这一段代码：</p> <pre><code class="lang-java hljs">      BasicConverter converter = <span class="hljs-keyword">new</span> HtmlToPdfConverterFactory().getInstance();
                                          DocumentBuilder builder = converter.getDocumentBuilder();
                                          PageSetup pageSetup = builder.getPageSetup();
                                          pageSetup.setPageWidth(<span class="hljs-number">2000</span>);
                                          pageSetup.setPageHeight(<span class="hljs-number">100</span>);
                                          String htmlFilePath = HtmlToPdfConverterTest.class.getClassLoader().getResource(<span class="hljs-string">&quot;test.html&quot;</span>).getPath();
                                          String pdfResultPath = <span class="hljs-string">&quot;./result11.pdf&quot;</span>;
                                          converter.convertByFilePath(htmlFilePath, pdfResultPath);
                                          assertEquals(<span class="hljs-keyword">true</span>, FileTool.isFileExists(<span class="hljs-string">&quot;./result11.pdf&quot;</span>));
                                    </code></pre> </li>
                                                            </ul>
                                                        </div>
                                                        <div class="card-body text-muted border-secondary" style="text-align: center;">
                                                            <a href="#" class="login-icon"><img src="http://springforall.ufile.ucloud.com.cn/images/wxcode.jpg" alt="" style="max-width: 150px; max-height: 150px;" /></a>
                                                            <h4 class="ui horizontal divider header red" style="font-size: 14px; color: rgb(125, 125, 125);"> 关注社区公号，加入社区纯技术微信群 </h4>
                                                        </div>
                </div>
            </div>
            <div class="col-sm-3 mt-4">


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "article-details",
        data() {
            return {
                article: {
                    title: '123'
                }
            }
        }
    }
</script>

<style scoped>

</style>
