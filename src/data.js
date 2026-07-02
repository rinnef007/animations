export const NAV_LINKS = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Về chúng tôi', href: '#about' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Dự án', href: '#project' },
  { label: 'Bài viết', href: '#articles' },
]

export const STATS = [
  { value: 32, suffix: '+', label: 'Năm kinh nghiệm' },
  { value: 182, suffix: '+', label: 'Cánh đồng đang canh tác' },
  { value: 134, suffix: ' K', label: 'Nông dân trên toàn thế giới' },
  { value: 15, prefix: '$', suffix: ' Tỷ', label: 'Lợi nhuận nông nghiệp' },
]

export const FEATURES = [
  {
    icon: 'sprout',
    text: 'Cải thiện sức khỏe đất cho cây trồng khỏe mạnh hơn.',
  },
  {
    icon: 'leaf',
    text: 'Giống cây trồng sáng tạo cho nhiều điều kiện khác nhau.',
  },
  {
    icon: 'brain',
    text: 'Nông nghiệp gắn liền với tích hợp công nghệ',
  },
]

export const SERVICES = [
  {
    number: '01',
    title: 'Tăng năng suất cây trồng với chất lượng tốt nhất',
    text: 'Tại VDF, chúng tôi tận tâm giúp bạn đạt năng suất cây trồng cao nhất có thể thông qua các dịch vụ nông nghiệp toàn diện và đổi mới.',
    image: '/images/lettuce-hands.jpg',
    reverse: false,
  },
  {
    number: '02',
    title: 'Tích hợp công nghệ',
    text: 'Tại VDF, chúng tôi chuyên tích hợp liền mạch công nghệ tiên tiến vào hoạt động canh tác của bạn để nâng cao hiệu quả, năng suất và tính bền vững.',
    image: '/images/drone-closeup.jpg',
    reverse: true,
  },
  {
    number: '03',
    title: 'Nghiên cứu và hạt giống sáng tạo',
    text: 'Đội ngũ nhà khoa học và chuyên gia nông học của chúng tôi ứng dụng các nghiên cứu di truyền và kỹ thuật lai tạo mới nhất để phát triển những hạt giống không chỉ tối đa hóa năng suất mà còn tăng khả năng chống chịu sâu bệnh và áp lực môi trường.',
    image: '/images/seedling-tray.jpg',
    reverse: false,
  },
]

export const PROJECTS = [
  {
    name: 'AgriFuture Solutions',
    text: 'AgriFuture Solutions là chương trình canh tác chính xác chủ lực của chúng tôi. Bằng cách kết hợp ảnh vệ tinh, phân tích thổ nhưỡng và tưới tiêu thông minh, chúng tôi giúp các nông trại giảm lãng phí và tăng sản lượng trên hàng nghìn héc-ta.',
    image: '/images/hero-field.jpg',
  },
  {
    name: 'Bowery AgroField',
    text: 'VDF đang dẫn dắt Sáng kiến Canh tác Thông minh Bền vững — một dự án đột phá nhằm cách mạng hóa nông nghiệp thông qua tích hợp công nghệ tiên tiến. Sáng kiến tập trung nâng cao năng suất cây trồng, cải thiện hiệu quả sử dụng tài nguyên và thúc đẩy bảo vệ môi trường.',
    image: '/images/cows.jpg',
  },
  {
    name: 'SmartFarm',
    text: 'SmartFarm mang cảm biến kết nối và máy móc tự hành đến các nông trại gia đình, giúp công nghệ nông nghiệp tiên tiến trở nên dễ tiếp cận, chi phí hợp lý và dễ vận hành với mọi người.',
    image: '/images/lettuce-hands.jpg',
  },
]

export const ARTICLE_CATEGORIES = [
  'Mới nhất',
  'Quản lý cây trồng',
  'Công nghệ và đổi mới',
  'Sức khỏe và đời sống',
]

export const ARTICLES = {
  'Mới nhất': [
    {
      title: 'Mùa vụ sắp tới: Nông dân cần lưu ý gì trong năm 2025',
      excerpt:
        'Từ biến động thời tiết đến những cơ hội thị trường mới, đây là tổng hợp các xu hướng sẽ định hình mùa vụ sắp tới và cách chuẩn bị cho chúng.',
      image: '/images/panorama.jpg',
    },
    {
      title: 'Bên trong VDF: Một năm canh tác bền vững của chúng tôi',
      excerpt:
        'Nhìn lại những cánh đồng, người nông dân và các đột phá làm nên một năm của chúng tôi — cùng những cột mốc chúng tôi hướng tới trên toàn mạng lưới.',
      image: '/images/hero-field.jpg',
    },
  ],
  'Quản lý cây trồng': [
    {
      title: 'Luân canh đúng cách: Đất khỏe hơn sau bốn mùa vụ',
      excerpt:
        'Luân canh cây trồng vẫn là một trong những công cụ hiệu quả nhất cho sức khỏe của đất. Hướng dẫn này trình bày các kế hoạch luân canh thực tế giúp tăng năng suất mà không cần thêm chi phí đầu vào.',
      image: '/images/seedling-tray.jpg',
    },
    {
      title: 'Đọc vị cánh đồng: Dấu hiệu sớm của thiếu hụt dinh dưỡng',
      excerpt:
        'Màu lá, tốc độ sinh trưởng và kết quả phân tích đất đều kể một câu chuyện. Học cách nhận biết sớm tình trạng thiếu dinh dưỡng và khắc phục trước khi nó ảnh hưởng đến vụ thu hoạch.',
      image: '/images/lettuce-hands.jpg',
    },
  ],
  'Công nghệ và đổi mới': [
    {
      title: 'Nâng cao năng suất cây trồng với máy kéo công nghệ',
      excerpt:
        'Canh tác chính xác đang cách mạng hóa ngành nông nghiệp, và máy kéo là trung tâm của cuộc chuyển đổi này. Bài viết khám phá cách những chiếc máy kéo hiện đại trang bị GPS và phân tích dữ liệu đang nâng cao năng suất cây trồng.',
      image: '/images/tractor.jpg',
    },
    {
      title: 'Drone: Trợ thủ mới của nông nghiệp hiện đại',
      excerpt:
        'Từ giám sát cây trồng đến phun thuốc chính xác, drone nông nghiệp đang mang đến cho người nông dân góc nhìn toàn cảnh cánh đồng cùng bộ công cụ mạnh mẽ cho công việc hằng ngày.',
      image: '/images/drone-sunset.jpg',
    },
  ],
  'Sức khỏe và đời sống': [
    {
      title: 'Từ nông trại đến bàn ăn: Trồng thực phẩm giàu dinh dưỡng hơn',
      excerpt:
        'Đất khỏe nuôi thực phẩm lành. Chúng tôi tìm hiểu các phương pháp canh tác giúp nâng cao rõ rệt giá trị dinh dưỡng của cây trồng hằng ngày.',
      image: '/images/cows.jpg',
    },
    {
      title: 'Sức khỏe người nông dân: Làm việc bền vững trên nông trại bền vững',
      excerpt:
        'Bền vững không chỉ nằm ở đất đai. Những chiến lược này giúp cộng đồng nông nghiệp khỏe mạnh, gắn kết và kiên cường qua những mùa vụ vất vả.',
      image: '/images/cta-mountains.jpg',
    },
  ],
}

export const FOOTER_COLUMNS = [
  {
    title: 'Điều hướng',
    links: ['Trang chủ', 'Về chúng tôi', 'Dịch vụ', 'Hồ sơ dự án', 'Bài viết'],
  },
  {
    title: 'Dự án',
    links: ['AgriFuture Solutions', 'Bowery AgroField', 'SmartFarm'],
  },
  {
    title: 'Hỗ trợ',
    links: ['Trợ giúp & hỗ trợ', 'Bảo mật'],
  },
]
