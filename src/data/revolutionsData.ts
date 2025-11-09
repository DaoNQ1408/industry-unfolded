export interface EventDescription {
  id: number;
  content: string;
}

export interface Event {
  id: string;
  year: string;
  title: string;
  descriptions: EventDescription[];
  imageUrl: string;
}

export interface Revolution {
  id: number;
  title: string;
  engTitle: string;
  location: string;
  period: string;
  description: string;
  color: string;
  events: Event[];
}

export const revolutionsData: Revolution[] = [
  {
    id: 1,
    title: "Cách mạng Cơ khí hóa",
    engTitle: "Mechanization Revolution",
    location: "Vương quốc Anh",
    period: "1760 - 1840",
    description:
      "Chuyển đổi từ nền kinh tế nông nghiệp và sản xuất thủ công sang nền kinh tế công nghiệp và sản xuất bằng máy móc.",
    color: "revolution-1",
    events: [
      {
        id: "1-1",
        year: "1764",
        title: "Máy kéo sợi Jenny",
        descriptions: [
          {
            id: 1,
            content:
              "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      },
      {
        id: "1-2",
        year: "1769",
        title: "Máy hơi nước của James Watt",

        descriptions: [
          {
            id: 1,
            content:
              'Động cơ hơi nước của James Watt là một trong những phát minh then chốt, được xem là "trái tim" khởi động Cuộc Cách mạng Công nghiệp lần thứ nhất (1.0)',
          },
          {
            id: 2,
            content:
              "Cần làm rõ rằng James Watt không phải là người phát minh ra động cơ hơi nước đầu tiên (người đó là Thomas Newcomen, với động cơ dùng để bơm nước mỏ than). Thay vào đó, Watt đã cải tiến vượt bậc động cơ Newcomen, biến nó từ một cỗ máy thô sơ, tiêu tốn nhiên liệu và chỉ dùng cho một mục đích, thành một cỗ máy hiệu quả, mạnh mẽ và linh hoạt, có khả năng ứng dụng rộng rãi.",
          },
          {
            id: 3,
            content: "",
          },
          {
            id: 4,
            content: "---",
          },
          {
            id: 5,
            content: "## ⚙️ Những cải tiến đột phá của James Watt",
          },
          {
            id: 6,
            content:
              "Những cải tiến của Watt tập trung vào việc giải quyết vấn đề lớn nhất của động cơ Newcomen: **sự lãng phí năng lượng (than đá)**.",
          },
          {
            id: 7,
            content:
              "1.  **Bình ngưng tụ riêng biệt (Phát minh vĩ đại nhất):**",
          },
          {
            id: 8,
            content:
              "* **Trước đó (Động cơ Newcomen):** Hơi nước được bơm vào một xi lanh, sau đó nước lạnh được phun trực tiếp vào xi lanh đó để làm hơi nước ngưng tụ, tạo chân không và kéo piston đi xuống. Quá trình này làm cho xi lanh bị *nguội đi* rồi lại phải *đốt nóng lên* ở chu kỳ tiếp theo, gây lãng phí nhiệt năng cực kỳ lớn.",
          },
          {
            id: 9,
            content:
              "* **Cải tiến của Watt (1769):** Watt đã thiết kế một **bình ngưng tụ riêng biệt**. Hơi nước sau khi đẩy piston sẽ được dẫn sang bình này để làm lạnh và ngưng tụ.",
          },
          {
            id: 10,
            content:
              "* **Kết quả:** Xi lanh chính *luôn được giữ nóng*. Điều này giúp giảm tới **75%** lượng than đá tiêu thụ so với động cơ Newcomen, khiến nó trở nên khả thi về mặt kinh tế.",
          },
          {
            id: 11,
            content:
              "2.  **Bộ truyền động bánh răng hành tinh (Sun and Planet Gear):**",
          },
          {
            id: 12,
            content:
              "* Động cơ Newcomen chỉ tạo ra chuyển động lên-xuống (dùng để bơm).",
          },
          {
            id: 13,
            content:
              '* Watt (cùng với cộng sự Matthew Boulton) đã phát minh ra hệ thống bánh răng này để **biến chuyển động lên-xuống của piston thành chuyển động quay tròn**. Đây là bước ngoặt cho phép động cơ hơi nước có thể kéo "mọi thứ", từ bánh xe tàu hỏa đến các trục máy trong nhà máy dệt.',
          },
          {
            id: 14,
            content: "3.  **Động cơ tác động kép (Double-Acting Engine):**",
          },
          {
            id: 15,
            content:
              "* Watt cải tiến để hơi nước có thể đẩy piston **cả hai chiều (đi lên và đi xuống)**, thay vì chỉ một chiều như trước. Điều này làm tăng gấp đôi công suất của động cơ.",
          },
          {
            id: 16,
            content: "4.  **Bộ điều tốc ly tâm (Centrifugal Governor):**",
          },
          {
            id: 17,
            content:
              "* Đây là một hệ thống phản hồi tự động. Nó sử dụng các quả văng ly tâm để **tự động điều chỉnh tốc độ của động cơ**, giữ cho nó chạy ở một tốc độ ổn định bất kể tải trọng thay đổi. Điều này cực kỳ quanít ng đối với các nhà máy dệt, nơi cần tốc độ máy móc đồng đều.",
          },
          {
            id: 18,
            content: "---",
          },
          {
            id: 19,
            content: "## 🏭 Đóng góp cho Cách mạng Công nghiệp 1.0",
          },
          {
            id: 20,
            content:
              "Động cơ hơi nước hiệu quả của Watt đã thay đổi thế giới mãi mãi:",
          },
          {
            id: 21,
            content: "1.  **Giải phóng năng lượng khỏi địa lý:**",
          },
          {
            id: 22,
            content:
              "* Trước đó, các nhà máy (chủ yếu là cối xay) phải đặt cạnh sông để lợi dụng sức nước.",
          },
          {
            id: 23,
            content:
              "* Động cơ của Watt có thể được đặt **ở bất cứ đâu** có than đá. Điều này cho phép các nhà máy mọc lên ở các thành phố, gần nguồn lao động và thị trường, dẫn đến quá trình đô thị hóa ồ ạt.",
          },
          {
            id: 24,
            content: "2.  **Cơ giới hóa ngành dệt may:**",
          },
          {
            id: 25,
            content:
              '* Đây là tác động trực tiếp và lớn nhất. Động cơ hơi nước cung cấp năng lượng ổn định, mạnh mẽ cho các máy dệt và máy kéo sợi (như Power Loom, Spinning Mule). Năng suất dệt vải tăng vọt, giá thành giảm mạnh, đưa nước Anh trở thành "công xưởng của thế giới".',
          },
          {
            id: 26,
            content: "3.  **Thúc đẩy ngành khai mỏ và luyện kim:**",
          },
          {
            id: 27,
            content:
              "* Động cơ hiệu quả hơn giúp bơm nước khỏi các mỏ than sâu hơn, khai thác được nhiều than hơn (nhiên liệu cho chính nó).",
          },
          {
            id: 28,
            content:
              "* Nó cũng được dùng để thổi không khí vào các lò luyện sắt, giúp sản xuất sắt thép với số lượng lớn.",
          },
          {
            id: 29,
            content: "4.  **Nền tảng cho Cách mạng Giao thông vận tải:**",
          },
          {
            id: 30,
            content:
              "* Mặc dù Watt không trực tiếp làm tàu hỏa hay tàu thủy, nhưng động cơ quay tròn, hiệu suất cao của ông là **tiền đề công nghệ** trực tiếp cho phép Robert Fulton (tàu thủy) và George Stephenson (tàu hỏa) tạo ra các phương tiện giao thông chạy bằng hơi nước, kết nối thế giới và vận chuyển hàng hóa trên quy mô chưa từng có.",
          },
          {
            id: 31,
            content:
              "Tóm lại, James Watt đã cung cấp **nguồn năng lượng nhân tạo, đáng tin cậy và hiệu quả** đầu tiên cho nhân loại, cho phép quá trình chuyển đổi từ lao động thủ công sang sản xuất bằng máy móc, châm ngòi cho Cuộc Cách mạng Công nghiệp 1.0.",
          },
          {
            id: 32,
            content: "---",
          },
          {
            id: 33,
            content:
              "Bạn có muốn tìm hiểu thêm về động cơ Newcomen (phiên bản trước đó) hay về các nhà phát minh quan trọng khác của cuộc cách mạng công nghiệp không?",
          },
        ],
        imageUrl:
          "https://res.cloudinary.com/dt3uzyfcg/image/upload/v1762712219/dongcohoinuoc_p2hoyf.jpg",
      },
      {
        id: "1-3",
        year: "1825",
        title: "Đường sắt hơi nước đầu tiên",
        descriptions: [
          {
            id: 1,
            content:
              "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=600&fit=crop",
      },
    ],
  },
  {
    id: 2,
    title: "Cách mạng công nghiệp lần thứ hai",
    engTitle: "Mechanization Revolution",
    location: "Toàn cầu",
    period: "1870 - 1914",
    description:
      "Kỷ nguyên điện, dầu mỏ và sản xuất hàng loạt. Sự phát triển của điện thoại, ô tô và máy bay.",
    color: "revolution-2",
    events: [
      {
        id: "2-1",
        year: "1876",
        title: "Phát minh điện thoại",
        descriptions: [
          {
            id: 1,
            content:
              "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1577563682092-f5939f04e28b?w=800&h=600&fit=crop",
      },
      {
        id: "2-2",
        year: "1879",
        title: "Bóng đèn điện",
        descriptions: [
          {
            id: 1,
            content:
              "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=800&h=600&fit=crop",
      },
      {
        id: "2-3",
        year: "1886",
        title: "Ô tô đầu tiên",
        descriptions: [
          {
            id: 1,
            content:
              "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      },
      {
        id: "2-4",
        year: "1903",
        title: "Máy bay đầu tiên",
        descriptions: [
          {
            id: 1,
            content:
              "Anh em nhà Wright thực hiện chuyến bay có động cơ đầu tiên thành công.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop",
      },
    ],
  },
  {
    id: 3,
    title: "Cách mạng công nghiệp lần thứ ba",
    engTitle: "Mechanization Revolution",
    location: "Toàn cầu",
    period: "1969 - 2000",
    description:
      "Kỷ nguyên số hóa với máy tính, internet và tự động hóa. Sự chuyển đổi từ công nghệ tương tự sang công nghệ số.",
    color: "revolution-3",
    events: [
      {
        id: "3-1",
        year: "1971",
        title: "Vi xử lý đầu tiên",
        descriptions: [
          {
            id: 1,
            content:
              "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      },
      {
        id: "3-2",
        year: "1989",
        title: "World Wide Web",
        descriptions: [
          {
            id: 1,
            content:
              "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      },
      {
        id: "3-3",
        year: "1998",
        title: "Google được thành lập",
        descriptions: [
          {
            id: 1,
            content:
              "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop",
      },
    ],
  },
  {
    id: 4,
    title: "Cách mạng công nghiệp lần thứ tư",
    engTitle: "Mechanization Revolution",
    location: "Toàn cầu",
    period: "2000 - Hiện tại",
    description:
      "Kết hợp công nghệ số, vật lý và sinh học. AI, IoT, blockchain và công nghệ sinh học.",
    color: "revolution-4",
    events: [
      {
        id: "4-1",
        year: "2007",
        title: "iPhone ra đời",
        descriptions: [
          {
            id: 1,
            content:
              "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop",
      },
      {
        id: "4-2",
        year: "2012",
        title: "Deep Learning bùng nổ",
        descriptions: [
          {
            id: 1,
            content:
              "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      },
      {
        id: "4-3",
        year: "2015",
        title: "Internet of Things",
        descriptions: [
          {
            id: 1,
            content:
              "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
      },
      {
        id: "4-4",
        year: "2022",
        title: "ChatGPT và AI sinh tạo",
        descriptions: [
          {
            id: 1,
            content:
              "James Hargreaves phát minh ra máy kéo sợi Jenny, cho phép một người có thể kéo nhiều sợi cùng lúc, tăng năng suất dệt may đáng kể.",
          },
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&h=600&fit=crop",
      },
    ],
  },
];
