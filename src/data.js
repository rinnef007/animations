export const NAV_LINKS = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Về chúng tôi', to: '/#about' },
  { label: 'Lĩnh vực', to: '/linh-vuc' },
  { label: 'Dự án', to: '/du-an' },
  { label: 'Tin tức', to: '/tin-tuc' },
]

// Số liệu minh họa — thay bằng số liệu chính thức của công ty tại đây.
export const STATS = [
  { value: 2023, label: 'Năm thành lập' },
  { value: 3, label: 'Lĩnh vực hoạt động' },
  { value: 10, suffix: '+', label: 'Năm kinh nghiệm đội ngũ' },
  { value: 50, suffix: '+', label: 'Dự án đã tham gia' },
]

export const FEATURES = [
  {
    icon: 'energy',
    text: 'Năng lượng tái tạo — điện gió và điện mặt trời vì tương lai xanh.',
  },
  {
    icon: 'road',
    text: 'Hạ tầng giao thông kết nối các vùng kinh tế trọng điểm.',
  },
  {
    icon: 'building',
    text: 'Phát triển đô thị, khu công nghiệp và công trình dân dụng.',
  },
]

export const SERVICES = [
  {
    number: '01',
    title: 'Đầu tư',
    text: 'VDF INVEST tập trung nguồn lực vào các dự án năng lượng tái tạo (điện gió, điện mặt trời), hạ tầng giao thông và các công trình trọng điểm, hướng tới hiệu quả dài hạn và sự phát triển bền vững của đất nước.',
    image: '/images/wind.jpg',
    reverse: false,
    details: [
      {
        title: 'Năng lượng',
        text: 'Đầu tư mạnh vào năng lượng tái tạo, đặc biệt là điện gió và điện mặt trời, với cam kết sử dụng tài nguyên bền vững và giảm thiểu ô nhiễm môi trường.',
      },
      {
        title: 'Hạ tầng giao thông',
        text: 'Rót vốn vào các dự án cầu đường và công trình giao thông chiến lược quốc gia, nâng cao khả năng kết nối và tạo động lực phát triển kinh tế liên vùng.',
      },
      {
        title: 'Dự án xây dựng',
        text: 'Đầu tư phát triển khu đô thị, khu công nghiệp cùng các công trình công cộng và nhà ở, dựa trên nền tảng kinh nghiệm kỹ thuật vững chắc.',
      },
    ],
  },
  {
    number: '02',
    title: 'Xây dựng',
    text: 'Chúng tôi cung cấp dịch vụ quản lý dự án, tư vấn thiết kế, giám sát và thi công xây dựng với đội ngũ kỹ sư giàu kinh nghiệm, đảm bảo tiến độ và chất lượng cho từng công trình.',
    image: '/images/construction.jpg',
    reverse: true,
    details: [
      {
        title: 'Quản lý dự án',
        text: 'Điều phối tổng thể dự án từ khâu chuẩn bị đến bàn giao, kiểm soát chặt chẽ tiến độ, chi phí và chất lượng công trình.',
      },
      {
        title: 'Tư vấn thiết kế',
        text: 'Đưa ra giải pháp thiết kế tối ưu về công năng, thẩm mỹ và chi phí, phù hợp quy chuẩn và đặc thù của từng công trình.',
      },
      {
        title: 'Tư vấn giám sát',
        text: 'Giám sát độc lập quá trình thi công, đảm bảo công trình tuân thủ thiết kế, tiêu chuẩn kỹ thuật và an toàn lao động.',
      },
      {
        title: 'Thi công xây dựng',
        text: 'Trực tiếp thi công với đội ngũ kỹ sư, công nhân lành nghề và thiết bị hiện đại, cam kết bàn giao đúng tiến độ.',
      },
    ],
  },
  {
    number: '03',
    title: 'Thương mại & Dịch vụ',
    text: 'Hoạt động thương mại, phân phối bán lẻ và các chương trình đào tạo chuyên môn giúp VDF INVEST mở rộng hệ sinh thái dịch vụ, đồng hành lâu dài cùng đối tác và khách hàng.',
    image: '/images/engineers.jpg',
    reverse: false,
    details: [
      {
        title: 'Thương mại',
        text: 'Cung cấp dịch vụ, phân phối và bán lẻ hàng hóa chất lượng, đặt lợi ích khách hàng làm trung tâm với phong cách phục vụ chuyên nghiệp.',
      },
      {
        title: 'Đào tạo chuyên môn',
        text: 'Tổ chức các chương trình đào tạo nâng cao kiến thức, kỹ năng cho người lao động, đáp ứng yêu cầu ngày càng cao của thị trường.',
      },
    ],
  },
]

// Thông tin chi tiết dự án mang tính minh họa — cập nhật theo hồ sơ thực tế tại đây.
export const PROJECTS = [
  {
    name: 'Trạm dịch vụ V52',
    tag: 'Xây dựng · Hạ tầng dịch vụ',
    text: 'VDF INVEST hoàn thành công trình mở rộng và cải tạo hạ tầng trạm dịch vụ V52, nâng cao năng lực phục vụ trên tuyến cao tốc và mang đến điểm dừng nghỉ hiện đại, an toàn, tiện nghi cho người dân.',
    image: '/images/station.jpg',
    banner: '/images/hero-infra.jpg',
    details: [
      {
        title: 'Hạng mục',
        text: 'Mở rộng mặt bằng, cải tạo hạ tầng kỹ thuật và nâng cấp khu dịch vụ tổng hợp phục vụ tuyến cao tốc.',
      },
      {
        title: 'Vai trò của VDF',
        text: 'Chủ đầu tư kiêm quản lý dự án, trực tiếp điều phối thi công, giám sát và nghiệm thu công trình.',
      },
      {
        title: 'Trạng thái',
        text: 'Đã hoàn thành và đưa vào vận hành năm 2026.',
      },
    ],
  },
  {
    name: 'Năng lượng tái tạo',
    tag: 'Đầu tư · Năng lượng',
    text: 'Danh mục đầu tư điện gió và điện mặt trời của VDF INVEST góp phần đa dạng hóa nguồn cung năng lượng, giảm phát thải và thúc đẩy quá trình chuyển dịch năng lượng xanh tại Việt Nam.',
    image: '/images/solar.jpg',
    banner: '/images/wind.jpg',
    details: [
      {
        title: 'Hạng mục',
        text: 'Danh mục dự án điện gió và điện mặt trời quy mô trang trại tại các vùng giàu tiềm năng.',
      },
      {
        title: 'Định hướng',
        text: 'Ưu tiên công nghệ hiệu suất cao, sử dụng đất hiệu quả và giảm thiểu tác động môi trường.',
      },
      {
        title: 'Trạng thái',
        text: 'Đang nghiên cứu và phát triển danh mục đầu tư.',
      },
    ],
  },
  {
    name: 'Hạ tầng giao thông',
    tag: 'Đầu tư · Giao thông',
    text: 'Tham gia đầu tư và xây dựng các công trình cầu đường trọng điểm, VDF INVEST góp phần tăng cường kết nối vùng và tạo động lực phát triển kinh tế – xã hội cho các địa phương.',
    image: '/images/hero-infra.jpg',
    banner: '/images/bridge.jpg',
    details: [
      {
        title: 'Hạng mục',
        text: 'Các công trình cầu, đường và nút giao thuộc những dự án giao thông trọng điểm.',
      },
      {
        title: 'Vai trò của VDF',
        text: 'Nhà đầu tư đồng hành cùng đối tác thi công và đơn vị quản lý vận hành.',
      },
      {
        title: 'Trạng thái',
        text: 'Đang triển khai theo từng giai đoạn.',
      },
    ],
  },
]

export const ARTICLE_CATEGORIES = [
  'Mới nhất',
  'Năng lượng xanh',
  'Xây dựng',
  'Cổ đông & sự kiện',
]

export const ARTICLES = {
  'Mới nhất': [
    {
      title: 'Xu hướng năng lượng xanh – định hướng phát triển bền vững',
      date: '31/05/2026',
      excerpt:
        'Năng lượng tái tạo đang trở thành trụ cột trong chiến lược phát triển hạ tầng. Cùng nhìn lại những xu hướng điện gió, điện mặt trời nổi bật và định hướng của VDF INVEST trong giai đoạn tới.',
      image: '/images/wind.jpg',
      body: [
        {
          text: 'Thế giới đang chuyển dịch mạnh mẽ sang các nguồn năng lượng sạch trước áp lực về nhu cầu điện ngày càng tăng và yêu cầu bảo vệ môi trường. Trong đó, điện mặt trời nổi bật nhờ chi phí đầu tư giảm nhanh, thi công linh hoạt và phù hợp với nhiều loại công trình.',
        },
        {
          heading: 'Tiềm năng tại Việt Nam',
          text: 'Với khí hậu nhiệt đới và lượng bức xạ mặt trời dồi dào quanh năm, Việt Nam có điều kiện lý tưởng để phát triển điện mặt trời. Đây cũng là hướng đi phù hợp với mục tiêu xây dựng nền kinh tế xanh và cam kết giảm phát thải của quốc gia.',
        },
        {
          heading: 'Các công trình VDF đã triển khai',
          text: 'VDF đã lắp đặt hệ thống điện mặt trời áp mái tại chợ Bỉm Sơn và chợ Cống (tỉnh Thanh Hóa), đồng thời triển khai hệ thống điện mặt trời tự sản tự tiêu tại các trạm dịch vụ V23, V52 và V77 trên tuyến cao tốc Hà Nội – Hải Phòng, giúp các công trình chủ động nguồn điện và giảm chi phí vận hành.',
          image: '/images/solar.jpg',
          caption: 'Hệ thống điện mặt trời áp mái tại công trình do VDF triển khai.',
        },
        {
          heading: 'Chất lượng và an toàn là ưu tiên hàng đầu',
          text: 'Trong quá trình lắp đặt và vận hành, VDF chú trọng kiểm soát chất lượng thiết bị, tuân thủ quy trình an toàn và bảo trì định kỳ, đảm bảo hệ thống hoạt động hiệu quả, ổn định trong dài hạn.',
          image: '/images/engineers.jpg',
          caption: 'Kỹ sư kiểm tra hệ thống trong quá trình lắp đặt và vận hành.',
        },
        {
          heading: 'Định hướng phát triển',
          text: 'VDF INVEST sẽ tiếp tục mở rộng ứng dụng năng lượng sạch trong các công trình xây dựng và hạ tầng do công ty đầu tư, thi công — góp phần hiện thực hóa mục tiêu phát triển bền vững "chung tay phát triển tương lai".',
        },
      ],
    },
    {
      title: 'VDF Invest hoàn thành mở rộng và cải tạo hạ tầng trạm dịch vụ V52',
      date: '19/05/2026',
      excerpt:
        'Công trình mở rộng trạm dịch vụ V52 chính thức hoàn thành, nâng cao năng lực phục vụ và mang đến trải nghiệm dừng nghỉ an toàn, tiện nghi hơn cho người dân trên tuyến cao tốc.',
      image: '/images/station.jpg',
      body: [
        {
          text: 'VDF Invest vừa hoàn thành công trình mở rộng và cải tạo hạ tầng trạm dịch vụ V52 trên tuyến cao tốc, đánh dấu một bước tiến trong việc chuẩn hóa hệ thống điểm dừng nghỉ hiện đại phục vụ người tham gia giao thông.',
        },
        {
          heading: 'Các hạng mục chính',
          text: 'Dự án bao gồm mở rộng mặt bằng khai thác, cải tạo hạ tầng kỹ thuật, nâng cấp khu dịch vụ tổng hợp và bổ sung tiện ích phục vụ hành khách, hướng tới trải nghiệm dừng nghỉ thuận tiện và an toàn hơn.',
          image: '/images/station.jpg',
          caption: 'Khu vực trạm dịch vụ sau khi được mở rộng và cải tạo.',
        },
        {
          heading: 'Giá trị mang lại',
          text: 'Sau cải tạo, trạm V52 nâng cao rõ rệt năng lực phục vụ vào các khung giờ cao điểm và dịp lễ, đồng thời cải thiện chất lượng dịch vụ, vệ sinh và cảnh quan toàn khu vực.',
        },
        {
          heading: 'Bước tiếp theo',
          text: 'VDF Invest sẽ tiếp tục rà soát và nâng cấp chuỗi trạm dịch vụ đang vận hành, kết hợp ứng dụng năng lượng mặt trời tự tiêu thụ để giảm chi phí và phát thải.',
        },
      ],
    },
  ],
  'Năng lượng xanh': [
    {
      title: 'Năng lượng xanh trong xây dựng hiện đại',
      date: '12/04/2026',
      excerpt:
        'Từ vật liệu thân thiện môi trường đến điện mặt trời áp mái, các giải pháp năng lượng xanh đang thay đổi cách những công trình được thiết kế, thi công và vận hành.',
      image: '/images/solar.jpg',
      body: [
        {
          text: 'Xu hướng xây dựng xanh không còn là lựa chọn mà đang trở thành tiêu chuẩn mới của ngành. Chủ đầu tư ngày càng quan tâm đến hiệu quả năng lượng của công trình ngay từ khâu thiết kế.',
        },
        {
          heading: 'Vật liệu và thiết kế tiết kiệm năng lượng',
          text: 'Vật liệu cách nhiệt tốt, kính tiết kiệm năng lượng và thiết kế tận dụng ánh sáng, thông gió tự nhiên giúp giảm đáng kể điện năng tiêu thụ trong suốt vòng đời công trình.',
        },
        {
          heading: 'Điện mặt trời áp mái',
          text: 'Hệ thống điện mặt trời áp mái cho phép công trình tự chủ một phần nguồn điện, giảm chi phí vận hành và phát thải — mô hình VDF đã áp dụng thực tế tại các công trình chợ và trạm dịch vụ.',
          image: '/images/solar.jpg',
          caption: 'Tấm quang năng áp mái — giải pháp phổ biến cho công trình thương mại.',
        },
        {
          heading: 'Lợi ích dài hạn',
          text: 'Chi phí đầu tư ban đầu cao hơn được bù đắp bằng chi phí vận hành thấp, giá trị tài sản tăng và hình ảnh phát triển bền vững của chủ đầu tư.',
        },
      ],
    },
    {
      title: 'Điện gió và điện mặt trời: cơ hội đầu tư dài hạn',
      date: '28/03/2026',
      excerpt:
        'Nhu cầu điện sạch tăng nhanh mở ra dư địa lớn cho các nhà đầu tư hạ tầng năng lượng. Phân tích tiềm năng và những yếu tố cần cân nhắc khi tham gia lĩnh vực này.',
      image: '/images/wind.jpg',
      body: [
        {
          text: 'Nhu cầu điện của Việt Nam tăng trưởng ổn định cùng tốc độ phát triển kinh tế, trong khi cam kết giảm phát thải đòi hỏi tỷ trọng năng lượng tái tạo ngày càng lớn trong cơ cấu nguồn điện.',
        },
        {
          heading: 'Dư địa cho nhà đầu tư',
          text: 'Điện gió và điện mặt trời quy mô trang trại còn nhiều tiềm năng tại các vùng có bức xạ và gió tốt. Chính sách khuyến khích năng lượng sạch tạo nền tảng cho các dự án dài hạn.',
          image: '/images/wind.jpg',
          caption: 'Điện gió — một trong những trụ cột của chuyển dịch năng lượng.',
        },
        {
          heading: 'Những yếu tố cần cân nhắc',
          text: 'Nhà đầu tư cần đánh giá kỹ quy hoạch điện, khả năng đấu nối lưới, chi phí vốn, công nghệ thiết bị và phương án vận hành – bảo trì trước khi quyết định rót vốn.',
        },
        {
          heading: 'Cách tiếp cận của VDF',
          text: 'VDF INVEST ưu tiên các dự án có hiệu suất cao, sử dụng đất hiệu quả và tác động môi trường thấp, đồng hành cùng đối tác từ nghiên cứu khả thi đến vận hành.',
        },
      ],
    },
  ],
  'Xây dựng': [
    {
      title: '5 yếu tố ảnh hưởng đến chi phí thi công xây dựng năm 2026',
      date: '10/05/2026',
      excerpt:
        'Giá vật liệu, nhân công, thiết kế, tiến độ và thủ tục pháp lý — phân tích năm yếu tố then chốt tác động trực tiếp đến chi phí thi công và cách kiểm soát ngân sách hiệu quả.',
      image: '/images/construction.jpg',
      body: [
        {
          text: 'Kiểm soát chi phí luôn là bài toán trọng tâm của mọi dự án xây dựng. Năm 2026, có năm yếu tố chính mà chủ đầu tư cần theo dõi sát để giữ ngân sách trong tầm kiểm soát.',
        },
        {
          heading: '1. Giá vật liệu xây dựng',
          text: 'Biến động giá thép, xi măng, cát đá ảnh hưởng trực tiếp đến tổng mức đầu tư. Ký hợp đồng cung ứng dài hạn và dự trù trượt giá là biện pháp phòng ngừa hiệu quả.',
        },
        {
          heading: '2. Chi phí nhân công',
          text: 'Mặt bằng lương nhân công kỹ thuật tăng đều qua các năm; tổ chức thi công hợp lý và cơ giới hóa giúp tối ưu năng suất trên từng đầu người.',
        },
        {
          heading: '3. Giải pháp thiết kế',
          text: 'Thiết kế tối ưu ngay từ đầu giảm thiểu phát sinh khi thi công. Chi phí điều chỉnh thiết kế giữa chừng thường cao gấp nhiều lần chi phí tư vấn ban đầu.',
          image: '/images/construction.jpg',
          caption: 'Công trường xây dựng — nơi mọi quyết định thiết kế thể hiện thành chi phí.',
        },
        {
          heading: '4. Tiến độ thi công',
          text: 'Kéo dài tiến độ đồng nghĩa đội chi phí quản lý, máy móc và lãi vay. Kế hoạch thi công chi tiết và giám sát chặt là chìa khóa giữ tiến độ.',
        },
        {
          heading: '5. Thủ tục pháp lý',
          text: 'Chậm trễ trong cấp phép, nghiệm thu hay phòng cháy chữa cháy có thể dừng cả công trường. Chuẩn bị hồ sơ pháp lý đầy đủ từ sớm giúp dự án vận hành trơn tru.',
        },
      ],
    },
    {
      title: 'Quản lý dự án hiệu quả: kinh nghiệm từ công trường',
      date: '22/02/2026',
      excerpt:
        'Điều phối nhà thầu, kiểm soát chất lượng và bám sát tiến độ — những bài học thực tế giúp dự án xây dựng về đích đúng hạn với chất lượng cao nhất.',
      image: '/images/engineers.jpg',
      body: [
        {
          text: 'Một dự án xây dựng thành công không chỉ nằm ở bản vẽ đẹp mà ở khả năng tổ chức thực hiện. Dưới đây là những kinh nghiệm thực tế từ các công trường do VDF quản lý.',
        },
        {
          heading: 'Điều phối nhà thầu',
          text: 'Phân định rõ phạm vi công việc, giao diện giữa các gói thầu và lịch phối hợp hằng tuần giúp tránh chồng chéo — nguyên nhân phổ biến nhất gây chậm tiến độ.',
        },
        {
          heading: 'Kiểm soát chất lượng',
          text: 'Nghiệm thu theo từng công đoạn thay vì dồn về cuối, kết hợp nhật ký thi công đầy đủ, giúp phát hiện và xử lý sai sót ngay khi còn dễ khắc phục.',
          image: '/images/engineers.jpg',
          caption: 'Kỹ sư rà soát hồ sơ nghiệm thu ngay tại công trường.',
        },
        {
          heading: 'Bám sát tiến độ',
          text: 'Theo dõi sản lượng thực tế so với kế hoạch theo tuần và cập nhật đường găng thường xuyên cho phép ra quyết định điều chỉnh kịp thời trước khi chậm trễ lan rộng.',
        },
      ],
    },
  ],
  'Cổ đông & sự kiện': [
    {
      title: 'Đại hội đồng cổ đông thường niên 2026 – VDF Invest',
      date: '24/04/2026',
      excerpt:
        'Đại hội đồng cổ đông thường niên 2026 thông qua kế hoạch kinh doanh, định hướng đầu tư và các mục tiêu phát triển trọng tâm của VDF INVEST trong năm tới.',
      image: '/images/meeting.jpg',
      body: [
        {
          text: 'Đại hội đồng cổ đông thường niên năm 2026 của VDF Invest đã diễn ra thành công với sự tham dự của các cổ đông, Hội đồng quản trị và Ban điều hành công ty.',
        },
        {
          heading: 'Nội dung chính của Đại hội',
          text: 'Đại hội đã nghe và thông qua báo cáo kết quả hoạt động, báo cáo tài chính, phương án phân phối lợi nhuận cùng kế hoạch kinh doanh cho năm tài chính tiếp theo.',
          image: '/images/meeting.jpg',
          caption: 'Phiên họp Đại hội đồng cổ đông thường niên.',
        },
        {
          heading: 'Định hướng năm tới',
          text: 'Công ty tập trung nguồn lực cho các dự án hạ tầng dịch vụ trên cao tốc, mở rộng danh mục năng lượng tái tạo và củng cố năng lực thi công xây dựng.',
        },
      ],
    },
    {
      title: 'VDF INVEST và định hướng phát triển giai đoạn mới',
      date: '15/01/2026',
      excerpt:
        'Với nền tảng từ các dự án hạ tầng quốc gia, VDF INVEST đặt mục tiêu trở thành đối tác chiến lược tin cậy trong đầu tư, xây dựng và thương mại dịch vụ.',
      image: '/images/city.jpg',
      body: [
        {
          text: 'Được thành lập cuối năm 2023 với đội ngũ giàu kinh nghiệm từ các dự án hạ tầng quốc gia, VDF INVEST bước vào giai đoạn phát triển mới với chiến lược rõ ràng trên ba trụ cột.',
        },
        {
          heading: 'Ba trụ cột chiến lược',
          text: 'Đầu tư năng lượng tái tạo và hạ tầng giao thông; dịch vụ xây dựng trọn gói từ tư vấn thiết kế đến thi công; và hoạt động thương mại – dịch vụ – đào tạo bổ trợ cho hệ sinh thái.',
          image: '/images/hero-infra.jpg',
          caption: 'Hạ tầng giao thông — một trong ba trụ cột chiến lược của VDF INVEST.',
        },
        {
          heading: 'Tầm nhìn',
          text: 'VDF INVEST hướng tới vị thế đối tác chiến lược tin cậy trong các dự án phát triển bền vững, chung tay cùng đối tác và cộng đồng kiến tạo giá trị dài hạn.',
        },
      ],
    },
  ],
}

export const FOOTER_COLUMNS = [
  {
    title: 'Điều hướng',
    links: ['Trang chủ', 'Về chúng tôi', 'Lĩnh vực', 'Dự án', 'Tin tức'],
  },
  {
    title: 'Lĩnh vực',
    links: ['Đầu tư', 'Xây dựng', 'Thương mại & Dịch vụ'],
  },
  {
    title: 'Công ty',
    links: ['Quan hệ cổ đông', 'Tuyển dụng', 'Liên hệ'],
  },
]

export const CONTACT = {
  address:
    'Tầng 10, tòa nhà Lilama10, đường Tố Hữu, Trung Văn, Nam Từ Liêm, Hà Nội',
  phone: '+84 382.156.168',
  email: 'investvdf@gmail.com',
}
