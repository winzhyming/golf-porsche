<template>
  <!-- <div id="index-view" style="padding-bottom: 12vmin; height: 100vh;"> -->
  <!-- <div id="index-view" class="bg-attach-ment" style="background: url(/static/images/2020/dt2020.png) bottom center no-repeat; background-size: 100% auto; background-color: #070304;"> -->
  <div id="index-view" class="bg-attach-ment" style="">
    <div class="body-index pr" style="padding-bottom: 39vmin;">
      <img src="/static/images/dots.jpg" alt="" style="position: absolute; top: 4vmin; left: 0; width: 100%; height: 15.625vmin; z-index: -1;">
      <section class="bi-tit fen-b">
        <img class="img-logo" src="/static/images/2019/logo.png" style="width: 50vmin;" alt="Porsche">
        <img class="img-word" src="/static/images/2021/landing-title.png" alt="2021 保时捷中国车主俱乐部年度晚宴 Porsche Club China Annual Gala 2021">
      </section>
      <section class="bi-btns">
        <ul class="u2021">
          <li>
            <router-link :to="{'name': 'huwai'}" class="btn-index b2021">
              <p>户外运动专场</p>
              <p>2021 年 12月 5 日 - 7 日</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{'name': 'qinzi'}" class="btn-index b2021">
              <p>亲子专场</p>
              <p>2021 年 12月 7 日 - 9 日</p>
            </router-link>
          </li>
        </ul>
      </section>
    </div>
    <img src="/static/images/2021/bot02.jpg" class="img-bot" style="width: 62%; left: 50%; bottom: 1%; transform: translateX(-50%);" >

    <!-- 协议弹框 -->
    <div class="xieyi-dimmer" v-if="!isAgree">
      <div class="xd-box">
        <div class="content">
          <h5>保时捷中国隐私政策</h5>
          <h5>肖像使用同意函</h5>
          <pre>
本人特此授权保时捷（中国）汽车销售有限公司及其关联公司（以下统称“保时捷”）将本人参与保时捷相关活动时的影音资料用于推广或其它任何目的，且本授权不受任何期间、地域或内容的限制。

本人了解该等同意将适用于静态影像以及视频（包括音频），并同意保时捷根据需要以现有的或将来出现的任何媒介形式将本人的影音资料用于市场营销资料、印刷广告、媒体资料、商业广告、推广视屏、电视节目、网络传播（包括现场直播），以及其他任何推广或信息材料中。本人同意由本人提供给保时捷的本人的名字及其他信息可以和本人的影音资料一同显示。

保时捷可以对本人的影音资料进行裁剪、更改或修饰，并将其与其他图像、文本、音频和图形进行组合。本人同意保时捷对由本人向其提供的包括影音资料在内的本人的任何个人信息进行保存、使用或加工处理。

本人了解，除非与保时捷在合同中事先约定，本人不会因本人的影音资料被使用而得到任何金钱或非金钱的补偿。本人了解保时捷对由其代表所拍摄的本人的任何影音资料享有独家所有权，本人不对该等影音资料享有法律权利。

通过签署本同意函，本人特此完全免除保时捷在任何情况下，与使用本人的影音资料有关的所有侵权主张。前述同意事项均为本人在自愿情况下作出，未受到任何胁迫和利诱。

本人特此确认并保证，本人已年满18周岁，具有以本人名义签署本同意函的完全行为能力，并且有意和同意接受本同意函的约束。

本同意函适用中华人民共和国法律。

本隐私政策（以下称“隐私政策”）介绍了保时捷（中国）汽车销售有限公司及其授权经销商（合称“保时捷”）如何收集有关您的信息、如何使用和分享您的信息以及您的选择。

1. 范围
1.1 本隐私政策适用于保时捷或代表保时捷通过发布了本隐私政策或其链接或以其他方式将本隐私政策呈现给您的保时捷实体店铺、车展、网站、在线服务或程序、移动应用程序 和社交媒体平台（包括但不限于我们的微信公众号 (WeChat) 及微信小程序或其他衍生或附属程序（应用））以及其他保时捷在线或线下产品、服务和活动（我们的“服务”）等收集 和处理的有关您的信息（参见以下“我们收集的信息”一节）。除非另有说明，本隐私政策所提及的“保时捷”，“我们”或“我们的”指保时捷（中国）汽车销售有限公司及其授权经销商。

2. 链接、第三方网站和社交媒体平台
2.1 我们的服务可能会包含第三方网站的链接以及微博或微信等社交媒体平台（以下统称“链接网站”）的链接。保时捷对链接网站的隐私政策或做法不承担任何责任。我们建议您仔细阅读您访问的每一个链接网站的隐私政策。

3. 服务的地域范围
3.1 我们的服务仅向中国大陆地区的用户提供。如果您位于中国大陆地区以外，请回到 www.porsche.com，并使用下拉框找到您所在地区的用户网站。

4. 我们收集的信息
4.1 本隐私政策中所提及的“个人信息”是指以电子或者其他方式记录的能够单独或者与其他信息结合识别自然人个人身份的各种信息。个人信息和不能用以识别特定个体的其它信息统称“信息”。
4.2 通过线上和/或线下各种形式（例如网页、应用、邮件、短信、信件、当面收集等），我们在不同情况下收集您的个人信息，包括但不限于：
(a) 您向我们订购和/或购买我们的任何产品或服务时；
(b) 您参与任何保时捷活动或项目时，包括参与任何活动、项目、竞赛、调查、车展、抽奖或我们不时提供的其它推广活动（以下统称“活动”）；
(c) 您订阅保时捷宣传品、快报或其它通讯时；
(d) 您与我们联系或沟通时和/或您要求我们提供信息时（例如通过网页、应用、邮件、短信、信件、当面沟通等）；
(e) 您访问或使用第三方社交媒体平台上与保时捷相关的网页或账户时（“社交媒体平台”）；
(f) 您访问或使用第三方垂直网站上与保时捷相关的网页或账户时（“垂直网站”）
(g) 您向我们提供或提交意见、建议、体验或其它内容时；和/或
(h) 以其它方式与我们和我们的服务进行互动时。
此外，若您已购买保时捷车辆 ，我们还将根据可适用的法律和监管要求和/或保时捷的技术要求，在您持有和使用保时捷车辆时收集相关的车辆信息。详见法定信息一节。
4.3 在您提交代表您同意我们收集和处理个人信息的授权声明后，我们将收集有关本隐私政策所述目的之各类个人信息，包括但不限于:
(a) 个人基本信息，包括您的姓名、身份证号码、职业和收入状况；
(b) 联络信息, 包括手机号码、电邮地址、邮政地址和邮编；
(c) 人口统计信息，例如您的性别、生日、国籍；
(d) 驾驶信息，例如您的驾驶证号码、您目前和过往驾驶的车辆、对于车辆的偏好；
(e) 购买信息，包括您所购买的产品及其价格，和其他交易细节；
(f) 支付信息，包括支付渠道、信用卡/借记卡信息；
(g) 评论及通信信息，例如您就我们提供的产品和/或服务所提出的评论或与我们的通信中所包含的个人信息；
(h) 互动信息，包括您选择响应或参与活动中所包含的个人信息，以及以其它方式与我们和我们的服务进行互动时所包含的个人信息；
(i) 垂直网站信息，包括您访问或使用第三方垂直网站上与保时捷相关的网页或账户时提交或产生的任何个人信息
(j) 社交媒体平台信息，包括：
(i) 您在注册社交平台（例如微信）账号时或在使用社交媒体平台服务的过程中授权社交媒体平台向社交媒体平台上的公众号运营者（比如我们）共享的您的社交媒体平台基本信息，
比如您的社交媒体平台用户名和昵称、头像、性别、城市、您的语言设置、您关注我们的社交媒体平台号的时间等；
(ii) 您使用我们在社交媒体平台上运营的我们的社交媒体平台号及任何程序（包括社交媒体平台小程序或其它衍生或附属程序（应用））时向我们提供的信息如：您的联系方式、 您所作的任何交易之细节、以及我们可能在您使用我们的社交媒体平台号或与前述程序互动的过程中获得的其他信息；
(iii) 您发送给我们的通信中所包含的个人信息，例如报告问题或提交关于我们的社交媒体平台号或其内容的查询、关注或评论；
(iv) 当您造访或进入距离我们店铺的一定范围内，我们仅为了通过我们的社交媒体平台号向您提供最新店内产品和服务信息之目的而检测到的您移动设备的 MAC（即 Media Access Control，媒体访问控制)地址。

您可以自愿提供任何上述信息。在许多情况下，如果您选择不提供上述信息，我们将无法为您提供我们的产品或服务，也无法回应您遇到的任何问题或者您的其他需求。

5. 法定信息
5.1 若您已购买保时捷车辆，我们还将根据可适用的法律和监管要求和/或保时捷的技术要求，收集和处理与您所购买的保时捷车辆有关的受监管的车辆信息和个人信息（“法定信息”）。您有义务配合保时捷对此类法定信息的收集，以符合可适用的法律和监管要求。
5.2 若您将所购买的保时捷车辆向第三方转卖时，您有义务告知该第三方，其应当在完成车辆变更登记后 30 个工作日内与保时捷（中国）汽车销售有限公司取得联系并提供相关的法定信息。

6. 自动收集的信息
6.1 Cookies: Cookies 是您的浏览器上存储的小文本文件，使我们能够进一步了解您访问或使用我们的服务的情况。我们可能会利用 cookies 来记录您的个人信息并且追踪您在一段时间内使用我们的服务的情况。大多数的浏览器自动接受 cookies。 您可以选择设置您的浏览器接受或拒绝 cookies。
6.2 日志文件信息：日志文件信息由您的浏览器或移动设备在您每次访问我们的服务时自动提供。 当您访问我们的服务时，服务器会自动记录特定的日志文件信息，例如您的网页请求、IP地址、浏览器类型、进入/退出的页面及 URL、点击次数和您与链接网站的互动、 域名、登录页面、浏览过的网页和其它信息。
6.3 位置数据: 当您通过移动设备访问我们的服务时，我们可能会访问、收集、监控和/或远程存储您的移动设备的信息以及实时“位置数据”，其中可能包括 GPS 坐标。位置数据可以使我们了解您如何浏览和使用我们的服务。 您可以通过调整您的移动设备的访问权限来选择拒绝允许我们访问您的位置数据，但如果位置数据功能使用受限或被禁止使用，服务的某些功能可能会无法正常运作。

7. 我们从第三方处获取的信息
7.1 我们可能会从第三方处获取有关您的信息。例如，如果您通过第三方（例如社交媒体平台或垂直网站）访问与保时捷相关的内容，该第三方可能会向我们提供有关您的信息。

8. 我们如何使用您的信息
8.1 我们使用您的信息，包括个人信息，主要基于以下目的，包括：
(a) 为您提供我们产品与服务；
(b) 就保时捷、其产品与服务以及活动与您进行沟通；
(c) 定制您的保时捷体验；
(d) 回应您的询问、评论或发帖；
(e) 管理我们的活动以及邀请您参加我们的活动；
(f) 改善并定制我们的服务；
(g) 内部管理，包括提高我们的产品和服务质量、市场营销工作，以及开展调查和分析；
(h) 开发新产品与服务；
(i) 处理付款；
(j) 调查或解决询问、投诉和争议；
(k) 出于市场营销和推广目的；
(l) 执行网站的使用条款和条件；
(m) 保护保时捷业务和服务的安全性和完整性；
(n) 出于保时捷客户或潜在客户关怀计划的目的；
(o) 产品信息统计和进行与产品检测、维护、保修、召回、售后有关的服务和沟通；
(p) 开展客户满意度调查和市场调研；
(q) 进行产品质量分析、故障排除和车辆救援，向您和经销商提供技术支持；
(r) 出于数据合并、存储和整合的目的；和/或
(s) 根据可适用的法律和监管要求向主管政府机构和/或其指定机构报告和传输数据。

9. 我们如何分享您的信息
9.1 在以下情况下我们会分享和披露您的个人信息：
(a) 向代表我们提供各类服务（包括但不限于服务的开发、维护和支持服务、支付处理服务、通讯服务和市场调查和分析服务）的第三方（无论位于中国大陆地区或以外地区）提供；
(b) 基于客户关怀和市场营销目的而向保时捷授权经销商提供；
(c) 基于推广和其他目的而向集团成员公司（无论位于中国大陆地区或以外地区）提供；
(d) 为了活动管理；
(e) 为了遵守法律、监管要求、法院判决或者其他法律程序要求，或者遵守法律调查的要求；
(f) 必要时，为了保护保时捷、其关联公司、授权经销商，及其各自员工、顾客、来访者、用户或者他个人或实体的权利和利益；
(g) 为了执行任何适用的条款条件和其他协议；
(h) 进行公司交易（例如合并、重组或者并购）时，您的个人信息将可能转移给收购方公司；
(i) 以不可识别个人的形式披露；和/或
(j) 根据您的同意披露。

10. 我们如何保护您的信息
10.1 我们提供合理的技术、管理和物理保障措施以确保您的个人信息安全。我们也会要求我们的第三方服务提供商使用商业合理安全措施以保护您的个人信息不被非授权人员访问或者使用。但是，任何数据传输都不能保证百分之百安全。

11. 提交内容和用户生成内容
11.1 除非在提交时有单独、确定的条款予以规定，您向我们传达或者提交的所有不涉及个人信息的建议、材料、评论或者其他知识产权（如想法、经验和照片）（以下称“提交内容”）将会被认为是非机密和非专属信息。保时捷对于此类提交内容不承担任何义务， 并且可以基于任何目的自由使用和传播提交内容，而不受任何限制。
11.2 您可以通过我们的服务发布并提交可能包含您个人信息的内容（如评论、照片、博客、发布内容等）。您将对您在我们的服务发布的任何信息（包括个人信息）所产生的后果负责。保时捷不对此类发布内容所产生的后果负责。

12. 反钓鱼
12.1 “钓鱼欺诈”是为了盗取您的个人信息所设计的骗局。如果你收到可疑电子邮件、短信或电话，看似是我们向您询问你的个人信息，请通过以下“联系我们”一节的内容告知我们。

13. 未成年人隐私
13.1 我们的服务并非为 18 周岁以下的未成年人使用而设计。我们不会明知在没有家长或者监护人同意的情况下收集 18 周岁以下的未成年人的个人信息。如果您认为我们在没有家长或者监护人同意的情况下或者在法律没有授权的情况下收集了此类信息， 请根据以下的“联系我们”一节内容告知我们，我们将予以删除。

14. 您的权利
14.1 您将有权选择是否接收来自保时捷的推广邮件或短信。我们发给您的每一封推广邮件或短信中将会为您提供退出机制，使您可以退订推广邮件或短信。
14.2 除了保时捷根据法律法规或监管要求应当继续收集、处理或保存的信息（例如法定信息），若符合可适用的法律要求，您可就保时捷所收集的个人信息进行更正或删除和行使其他法定权利。若您希望行使本节所述的任何用户权利，请通过以下方式联系我们:客服热线：4008205911
来信请寄：中国（上海）自由贸易试验区世纪大道 826 号 17 层 （邮编：200127；收件人：保时捷（中国）汽车销售有限公司）

15. 联系我们
15.1 如果您对本隐私政策或者我们的隐私做法有任何疑问或者评论，请通过以下方式联系我们:
邮箱：compliance@porsche.cn
来信请寄：中国（上海）自由贸易试验区世纪大道 826 号 17 层 （邮编：200127；收件人：法务合规部门，保时捷（中国）汽车销售有限公司）

16. 您接受我们的隐私政策
16.1 通过使用我们的服务，意味着您接受我们的隐私政策，并且同意遵守我们发布于服务平台的 “法律声明”下的条款和条件。如果您不同意隐私政策中的条款，请不要访问或使用我们的服务或者向我们提交任何个人信息。

17. 隐私政策的变更
17.1 保时捷保留在任何时候修改本隐私政策的权利，因此，您需要定期查看其变更内容。如果我们变更本隐私政策，我们将会把变更内容发布在：https://www.porsche.com/china/zh/legal-notice/ 如您在发布变更内容后继续使用我们的服务平台， 并且/或者继续提供您的个人信息，将会构成您对变更内容的接受。如果我们根据自己的判断认为本隐私政策内容的变更对使用和披露您的个人信息具有实质性影响，我们将会在https://www.porsche.com/china/ 发布公告通知，并且提供更新的隐私政策的链接。 如果您需要任何有关变更的信息，请根据“联系我们”一节的内容联系我们。

          </pre>
<br>
          <h5>Porsche (China) Motors Ltd. Privacy Policy</h5>
          <h5>Consent to Use Likeness</h5>
          <pre>

I hereby authorize Porsche (China) Motors Limited, and its affiliated companies (collectively, “Porsche”) to use my image which depicts me participating in Porsche-related activities for any purpose whatsoever, whether promotional or otherwise, without limitation regarding duration, territory or content.

I understand that this agreement applies to static photography and video (including audio). I understand these images may be used for marketing materials, print ads, press materials, commercials, promotional videos, TV shows, internet content (including live streams), or any other promotional or informational materials, in any medium now existing or hereafter developed, as Porsche desires.  I consent to my name and any other information provided by me to Porsche being displayed in connection with the appearance of my Image.

Porsche may crop, alter or modify images of me and combine such images with other images, text, audio recordings and graphics. I consent to any of my personal Information provided by me to Porsche, including images of me, being stored, used or processed by Porsche.

I understand that I will receive no compensation, whether monetary or non-monetary, for the use of my image, unless previously contracted for with Porsche. I understand all images of me captured by Porsche‘s representatives are the sole property of Porsche, and I have no legal right to them.

By signing this Consent form I grant to Porsche a full and complete release of all claims, now and hereafter, with respect to the use of my image. My consent to the foregoing is given voluntarily and without any threats or promises of any kind.

I hereby affirm and attest that I am at least 18 years of age and I am competent to sign this consent in my own name, and that I intend and agree to be bound by this Consent form.

PRC law shall apply to this Consent form.
This privacy policy (“Privacy Policy”) describes the information that Porsche (China) Motors Ltd. and authorized Porsche dealers (collectively, "Porsche") collects about you, how we use and share your information, and your choices.

<h6><strong>Scope</strong></h6>
This Privacy Policy applies to information collected and processed about you by or on behalf of Porsche as set forth in the below “Information We Collect” section, including through any Porsche's physical stores, auto shows, websites, online services or programs, mobile applications and social media platforms (including but not limited to our WeChat official account and WeChat mini-programs or other derivative or affiliate programs (applications)) and any other Porsche's online or offline products, services and events where this Privacy Policy is posted, linked or otherwise presented to you (our “Services”). Unless otherwise indicated, all references to “Porsche”, “we” or “our” in this Privacy Policy means Porsche (China) Motors Ltd. and authorized Porsche dealers.

<h6><strong>Links, Third-Party Websites, and Social Media Platforms</strong></h6>
Our Services may contain links to the websites of third parties, as well as to social media platforms such as Weibo or WeChat (“Linked Sites”). Porsche is not responsible and has no liability for the privacy policies or practices of Linked Sites. We recommend that you review the privacy policies of each Linked Site you visit.

<h6><strong>Geographical Scope of Services</strong></h6>
Our Services are for users located exclusively in the mainland of the People's Republic of China. If you are located outside the mainland of the People's Republic of China, please return to www.porsche.com and use the drop down box to find the website for users in your location.

<h6><strong>Information We Collect</strong></h6>
As used in this Privacy Policy, “Personal Information” means all kinds of information recorded by electronic or otherwise that can be used to independently identify or be combined with other information to identify natural persons. “Information” is collectively used herein to refer to both Personal Information and other information that does not identify a specific individual.

Through various online and/or offline forms (e.g., web pages, applications, emails, SMS, letters, face-to-face collection, etc.), we collect your personal information in different occasions, including but not limited to when you:

&bull; order and/or purchase any of our products or services from us;
&bull; participate in any Porsche event or program, including any event, program, contest, survey, auto show, sweepstake or other promotion that we may offer from time to time (collectively, “Events”);
&bull; subscribe to the Porsche marketing materials, newsletter, or other communications from us;
&bull; contact or communicate with us and/or request information from us (e.g., via web pages, applications, emails, SMS, letters, face-to-face communication, etc.);
&bull; access or use Porsche-related pages or accounts on any third-party social media platforms (“Social Media Platforms”);
&bull; access or use Porsche-related pages or accounts on any third-party vertical websites ("Vertical Websites");
&bull; provide or submit comments, suggestions, experiences, or other content to us; and/or
&bull; otherwise interact with us and our Services.

<strong>In addition, if you have purchased Porsche vehicle(s), we will also collect relevant vehicle information in accordance with applicable legal and regulatory requirements and/or Porsche technical requirements when you are possessing and using Porsche vehicle(s). Please refer to the Statutory Information section.</strong>

Following your submission a Declaration of Consent representing your consent to our collection and processing of your Personal Information, we will collect all kinds of Personal Information relating to the purpose of this Privacy Policy, including but not limited to:

&bull; basic personal information, including your name, citizen ID, occupation and income status；
&bull; contact information, including mobile phone number, email address, postal address and zip code;
&bull; demographic information, such as your gender, birthday, nationality;
&bull; driving information, such as your driver's license number, your current and past vehicles, and your vehicle preferences;
&bull; purchase information, including the product you purchased and its price, and other transaction details;
&bull; payment information, including payment channels, credit card/debit card information;
&bull; comment and communication information, including the Personal Information contained in your reviews or correspondence with us regarding the products and/or services we provide;
&bull; interaction information, including Personal Information contained in any Events and other interaction with us and our Services that you choose to respond to or participate in;
&bull; Vertical Websites information, including any information generated or submitted during your access or using of Porsche-related pages or accounts on any third-party vertical websites;

Social Media Platform information, including:

&bull; your basic information of social media platforms that you authorize social media platforms to share with official account operators (such as us) on such platforms when you registered your social media platform account or in the process of using social media platform services, such as your account name and nickname, profile picture, gender, city, your language settings, when you followed our social media platform official account, etc.
&bull; the information you provide to us such as your contact information, details of any transactions you make, and other information we may obtain when you use or interact with our social media platform official account and any mini-programs operated by us on the social media platforms (including social media platforms applets or other derivative or affiliate programs (applications));
&bull; Personal Information contained in your correspondence with us, such as reporting problems or submitting queries, subscriptions or comments about our social media platform official account or its contents;
&bull; the MAC (Media Access Control) address of your mobile device that we detect only for the purpose of providing you with the latest in-store product and service information through our social media platform official account when you visit or enter a certain distance from our stores.

You may voluntarily provide any of the above information. In many cases, if you choose not to provide the above information, we will not be able to provide you with our products or services, or respond to any of your problems or other needs.

          </pre>
        </div>
        <a @click="setAgree" href="javascript:;" class="btn-gree">我同意</a>
      </div>
    </div>

    <!-- 合算检测弹框 -->
    <div class="xieyi-dimmer" v-if="!hsAgree && isAgree">
      <div class="xd-box">
        <div class="content">
          <pre>
因政府相关疫情防控措施更新，为严守防疫，确保宾客安全，由疫情高风险及中风险地区抵店的客人，须持抵店前 7 日内有效核酸检测阴性证明；通过测温及采取个人防护措施后可正常入住酒店。

疫情低风险地区的客人抵店时需出示健康吗“绿码”，测温正常且做好个人防护后，即可入住酒店。

敬请留意以上信息会根据疫情防控政策动态调整，若政府相关部门临时增加或采取其他防控措施（如高、中风险地区客人抵琼后，需于指定地点进行二次核酸检测或隔离），则以政府相关部门规定为准。
          </pre>
        </div>
        <a @click="setHsAgree" href="javascript:;" class="btn-gree">我同意</a>
      </div>
    </div>

  </div>
</template>

<script>
  import Https from 'https'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {}
    },
    created() {
      // $('.body').addClass('body-index-bg');
    },
    mounted() {
    },
    methods: {
      goOtherMini() {
        wx.miniProgram.navigateTo({
          url: '/pages/test/test',
  　　  })
      },
      setAgree() {
        this.$store.commit('UPDATE_AGREE', true)
      },
      setHsAgree() {
        this.$store.commit('UPDATE_HS_AGREE', true)
      }
    },
    computed:{
      ...mapState({
        isAgree: state => state.mutations.isAgree,
        hsAgree: state => state.mutations.hsAgree
      })
    },
    beforeDestroy() {
      // $('.body').removeClass('body-index-bg');
      // $('.body').removeClass('body-finalist');
    }
  }
</script>



// WEBPACK FOOTER //
// src/views/public/index.vue
