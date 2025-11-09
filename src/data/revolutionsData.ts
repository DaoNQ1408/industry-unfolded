export interface Event {
  id: string;
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Revolution {
  id: number;
  title: string;
  period: string;
  description: string;
  color: string;
  events: Event[];
}

export const revolutionsData: Revolution[] = [
  {
    id: 1,
    title: "Cách mạng công nghiệp lần thứ nhất",
    period: "1760 - 1840",
    description: "Bắt đầu với việc phát minh ra máy hơi nước, đánh dấu sự chuyển đổi từ sản xuất thủ công sang cơ giới hóa.",
    color: "revolution-1",
    events: [
      {
        id: "1-1",
        year: "1764",
        title: "Máy kéo sợi Jenny",
        description: "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
        imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
      },
      {
        id: "1-2",
        year: "1769",
        title: "Máy hơi nước của James Watt",
        description: "James Watt cải tiến máy hơi nước, tạo ra động lực cho các nhà máy và phương tiện vận tải, mở đầu kỷ nguyên công nghiệp.",
        imageUrl: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop"
      },
      {
        id: "1-3",
        year: "1825",
        title: "Đường sắt hơi nước đầu tiên",
        description: "George Stephenson mở đường sắt Stockton-Darlington, đánh dấu sự khởi đầu của vận tải đường sắt hiện đại.",
        imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=600&fit=crop"
      }
    ]
  },
  {
    id: 2,
    title: "Cách mạng công nghiệp lần thứ hai",
    period: "1870 - 1914",
    description: "Kỷ nguyên điện, dầu mỏ và sản xuất hàng loạt. Sự phát triển của điện thoại, ô tô và máy bay.",
    color: "revolution-2",
    events: [
      {
        id: "2-1",
        year: "1876",
        title: "Phát minh điện thoại",
        description: "Alexander Graham Bell phát minh ra điện thoại, cách mạng hóa thông tin liên lạc toàn cầu.",
        imageUrl: "https://images.unsplash.com/photo-1577563682092-f5939f04e28b?w=800&h=600&fit=crop"
      },
      {
        id: "2-2",
        year: "1879",
        title: "Bóng đèn điện",
        description: "Thomas Edison phát minh bóng đèn điện thực용, mang ánh sáng đến cho hàng triệu người.",
        imageUrl: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=800&h=600&fit=crop"
      },
      {
        id: "2-3",
        year: "1886",
        title: "Ô tô đầu tiên",
        description: "Karl Benz chế tạo ô tô chạy bằng xăng đầu tiên, mở đầu cho ngành công nghiệp ô tô.",
        imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop"
      },
      {
        id: "2-4",
        year: "1903",
        title: "Máy bay đầu tiên",
        description: "Anh em nhà Wright thực hiện chuyến bay có động cơ đầu tiên thành công.",
        imageUrl: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop"
      }
    ]
  },
  {
    id: 3,
    title: "Cách mạng công nghiệp lần thứ ba",
    period: "1969 - 2000",
    description: "Kỷ nguyên số hóa với máy tính, internet và tự động hóa. Sự chuyển đổi từ công nghệ tương tự sang công nghệ số.",
    color: "revolution-3",
    events: [
      {
        id: "3-1",
        year: "1971",
        title: "Vi xử lý đầu tiên",
        description: "Intel giới thiệu vi xử lý 4004, mở đầu kỷ nguyên máy tính cá nhân.",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
      },
      {
        id: "3-2",
        year: "1989",
        title: "World Wide Web",
        description: "Tim Berners-Lee phát minh ra World Wide Web tại CERN, tạo nền tảng cho internet hiện đại.",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
      },
      {
        id: "3-3",
        year: "1998",
        title: "Google được thành lập",
        description: "Larry Page và Sergey Brin thành lập Google, thay đổi cách chúng ta tìm kiếm thông tin.",
        imageUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop"
      }
    ]
  },
  {
    id: 4,
    title: "Cách mạng công nghiệp lần thứ tư",
    period: "2000 - Hiện tại",
    description: "Kết hợp công nghệ số, vật lý và sinh học. AI, IoT, blockchain và công nghệ sinh học.",
    color: "revolution-4",
    events: [
      {
        id: "4-1",
        year: "2007",
        title: "iPhone ra đời",
        description: "Apple giới thiệu iPhone, cách mạng hóa điện thoại di động và tạo ra kỷ nguyên smartphone.",
        imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop"
      },
      {
        id: "4-2",
        year: "2012",
        title: "Deep Learning bùng nổ",
        description: "AlexNet giành chiến thắng ImageNet, đánh dấu sự phát triển mạnh mẽ của AI và học sâu.",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
      },
      {
        id: "4-3",
        year: "2015",
        title: "Internet of Things",
        description: "IoT trở thành xu hướng chính, kết nối hàng tỷ thiết bị thông minh với nhau.",
        imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop"
      },
      {
        id: "4-4",
        year: "2022",
        title: "ChatGPT và AI sinh tạo",
        description: "OpenAI ra mắt ChatGPT, mở ra kỷ nguyên mới của AI có thể tương tác và sáng tạo nội dung.",
        imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&h=600&fit=crop"
      }
    ]
  }
];
