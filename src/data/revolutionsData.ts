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
              "Tất nhiên, Máy kéo sợi Jenny (Spinning Jenny) là một trong những phát minh nền tảng, có tầm quan trọng tương đương với động cơ hơi nước trong việc khởi động Cuộc Cách mạng Công nghiệp 1.0, đặc biệt là trong ngành dệt may.",
          },
          {
            id: 2,
            content:
              "Máy kéo sợi Jenny được phát minh bởi James Hargreaves vào khoảng năm 1764.",
          },
          {
            id: 3,
            content: "Cải tiến đột phá: Từ 1 đến 8 (và hơn thế nữa)",
          },
          {
            id: 4,
            content:
              'Trước khi có Spinning Jenny, công việc kéo sợi được thực hiện bằng xa quay tơ (spinning wheel). Đây là một "nút thắt cổ chai" khổng lồ của ngành dệt, vì:',
          },
          {
            id: 5,
            content:
              "Năng suất cực thấp: Mỗi xa quay tơ chỉ kéo được một con suốt (cuộn) sợi tại một thời điểm.",
          },
          {
            id: 6,
            content:
              'Mất cân đối: Một thợ dệt (sử dụng "thoi bay" - Flying Shuttle, một phát minh trước đó) cần sợi từ 5 đến 10 thợ kéo sợi mới đủ để làm việc liên tục.',
          },
          {
            id: 7,
            content:
              "Cải tiến thiên tài của James Hargreaves là thiết kế một cỗ máy mà một công nhân (thường là phụ nữ hoặc trẻ em) có thể quay một bánh xe duy nhất để vận hành nhiều cọc suốt cùng một lúc.",
          },
          {
            id: 8,
            content:
              "Phiên bản đầu tiên của máy Jenny có 8 cọc suốt, về cơ bản đã nhân năng suất của một công nhân lên 8 lần ngay lập tức.",
          },
          {
            id: 9,
            content:
              "Các phiên bản sau này nhanh chóng được cải tiến lên 16, 80, và cuối cùng là 120 cọc suốt.",
          },
          {
            id: 10,
            content:
              "Một đặc điểm quan trọng nữa là máy Jenny ban đầu tương đối nhỏ gọn, rẻ tiền và chạy hoàn toàn bằng sức người.",
          },
          {
            id: 11,
            content: "Đóng góp cho Cách mạng Công nghiệp 1.0",
          },
          {
            id: 12,
            content:
              "Tác động của Spinning Jenny lên ngành dệt may và toàn xã hội là vô cùng to lớn và gần như ngay lập tức.",
          },
          {
            id: 13,
            content: '1. Phá vỡ "nút thắt cổ chai" trong sản xuất sợi:',
          },
          {
            id: 14,
            content:
              "Đây là đóng góp quan trọng nhất. Lần đầu tiên trong lịch sử, sản lượng sợi có thể được sản xuất hàng loạt, đáp ứng kịp (và thậm chí vượt) nhu cầu khổng lồ của các thợ dệt.",
          },
          {
            id: 15,
            content:
              '2. Khởi đầu cho hệ thống "Tiểu thủ công nghiệp" (Cottage Industry):',
          },
          {
            id: 16,
            content:
              "Vì máy Jenny nhỏ và không cần nguồn năng lượng lớn (như sức nước hay hơi nước), nó có thể được đặt ngay trong các ngôi nhà của người nông dân. Các gia đình mua máy và kéo sợi tại nhà để kiếm thêm thu nhập. Điều này tạo ra một làn sóng sản xuất phi tập trung mạnh mẽ trước khi các nhà máy tập trung ra đời.",
          },
          {
            id: 17,
            content: "3. Giảm mạnh giá thành vải vóc:",
          },
          {
            id: 18,
            content:
              "Khi nguồn cung sợi tăng vọt, vải (đặc biệt là vải cotton) được sản xuất nhiều hơn với chi phí thấp hơn. Quần áo trở nên rẻ hơn và dễ tiếp cận hơn với mọi tầng lớp nhân dân, không còn là mặt hàng quá xa xỉ.",
          },
          {
            id: 19,
            content: "4. Tạo tiền đề cho các phát minh tiếp theo:",
          },
          {
            id: 20,
            content:
              "Bản thân máy Jenny có một hạn chế: sợi nó tạo ra tuy nhiều nhưng khá thô và yếu, chỉ thích hợp làm sợi ngang (weft). Điều này đã thúc đẩy Richard Arkwright phát minh ra Máy kéo sợi Thủy lực (Water Frame) (1769) để tạo ra sợi chắc hơn (dùng làm sợi dọc - warp). Sự kết hợp của hai công nghệ này đã hoàn thiện quy trình sản xuất sợi công nghiệp.",
          },
          {
            id: 21,
            content: "5. Gây ra biến động xã hội:",
          },
          {
            id: 22,
            content:
              "Giống như mọi công nghệ đột phá, Spinning Jenny khiến hàng ngàn thợ kéo sợi thủ công truyền thống bị mất việc. Điều này đã dẫn đến các cuộc bạo loạn (như phong trào Luddite), nơi các thợ thủ công tức giận đã đập phá các máy móc mới vì cho rằng chúng cướp đi kế sinh nhai của họ.",
          },
        ],
        imageUrl:
          "https://res.cloudinary.com/dt3uzyfcg/image/upload/v1762717813/jenny_pcqrqy.jpg",
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
            content: " ",
          },
          {
            id: 5,
            content: "Những cải tiến đột phá của James Watt",
          },
          {
            id: 6,
            content:
              "Những cải tiến của Watt tập trung vào việc giải quyết vấn đề lớn nhất của động cơ Newcomen: sự lãng phí năng lượng than đá.",
          },
          {
            id: 7,
            content: "1. Bình ngưng tụ riêng biệt (Phát minh vĩ đại nhất):",
          },
          {
            id: 8,
            content:
              "    Trước đó (Động cơ Newcomen):   Hơi nước được bơm vào một xi lanh, sau đó nước lạnh được phun trực tiếp vào xi lanh đó để làm hơi nước ngưng tụ, tạo chân không và kéo piston đi xuống. Quá trình này làm cho xi lanh bị *nguội đi* rồi lại phải đốt nóng lên ở chu kỳ tiếp theo, gây lãng phí nhiệt năng cực kỳ lớn.",
          },
          {
            id: 9,
            content:
              "    Cải tiến của Watt (1769):   Watt đã thiết kế một bình ngưng tụ riêng biệt. Hơi nước sau khi đẩy piston sẽ được dẫn sang bình này để làm lạnh và ngưng tụ.",
          },
          {
            id: 10,
            content:
              "    Kết quả:   Xi lanh chính  luôn được giữ nóng . Điều này giúp giảm tới 75% lượng than đá tiêu thụ so với động cơ Newcomen, khiến nó trở nên khả thi về mặt kinh tế.",
          },
          {
            id: 11,
            content:
              "2. Bộ truyền động bánh răng hành tinh (Sun and Planet Gear):",
          },
          {
            id: 12,
            content:
              "  Động cơ Newcomen chỉ tạo ra chuyển động lên-xuống (dùng để bơm).",
          },
          {
            id: 13,
            content:
              '  Watt (cùng với cộng sự Matthew Boulton) đã phát minh ra hệ thống bánh răng này để biến chuyển động lên-xuống của piston thành chuyển động quay tròn. Đây là bước ngoặt cho phép động cơ hơi nước có thể kéo "mọi thứ", từ bánh xe tàu hỏa đến các trục máy trong nhà máy dệt.',
          },
          {
            id: 14,
            content: "3. Động cơ tác động kép (Double-Acting Engine):",
          },
          {
            id: 15,
            content:
              "  Watt cải tiến để hơi nước có thể đẩy piston cả hai chiều (đi lên và đi xuống), thay vì chỉ một chiều như trước. Điều này làm tăng gấp đôi công suất của động cơ.",
          },
          {
            id: 16,
            content: "4. Bộ điều tốc ly tâm (Centrifugal Governor):",
          },
          {
            id: 17,
            content:
              "  Đây là một hệ thống phản hồi tự động. Nó sử dụng các quả văng ly tâm để tự động điều chỉnh tốc độ của động cơ, giữ cho nó chạy ở một tốc độ ổn định bất kể tải trọng thay đổi. Điều này cực kỳ quanít ng đối với các nhà máy dệt, nơi cần tốc độ máy móc đồng đều.",
          },
          {
            id: 18,
            content: " ",
          },
          {
            id: 19,
            content: "Đóng góp cho Cách mạng Công nghiệp 1.0",
          },
          {
            id: 20,
            content:
              "Động cơ hơi nước hiệu quả của Watt đã thay đổi thế giới mãi mãi:",
          },
          {
            id: 21,
            content: "1. Giải phóng năng lượng khỏi địa lý:",
          },
          {
            id: 22,
            content:
              "  Trước đó, các nhà máy (chủ yếu là cối xay) phải đặt cạnh sông để lợi dụng sức nước.",
          },
          {
            id: 23,
            content:
              "  Động cơ của Watt có thể được đặt **ở bất cứ đâu** có than đá. Điều này cho phép các nhà máy mọc lên ở các thành phố, gần nguồn lao động và thị trường, dẫn đến quá trình đô thị hóa ồ ạt.",
          },
          {
            id: 24,
            content: "2. Cơ giới hóa ngành dệt may:",
          },
          {
            id: 25,
            content:
              '  Đây là tác động trực tiếp và lớn nhất. Động cơ hơi nước cung cấp năng lượng ổn định, mạnh mẽ cho các máy dệt và máy kéo sợi (như Power Loom, Spinning Mule). Năng suất dệt vải tăng vọt, giá thành giảm mạnh, đưa nước Anh trở thành "công xưởng của thế giới".',
          },
          {
            id: 26,
            content: "3. Thúc đẩy ngành khai mỏ và luyện kim:",
          },
          {
            id: 27,
            content:
              "  Động cơ hiệu quả hơn giúp bơm nước khỏi các mỏ than sâu hơn, khai thác được nhiều than hơn (nhiên liệu cho chính nó).",
          },
          {
            id: 28,
            content:
              "  Nó cũng được dùng để thổi không khí vào các lò luyện sắt, giúp sản xuất sắt thép với số lượng lớn.",
          },
          {
            id: 29,
            content: "4. Nền tảng cho Cách mạng Giao thông vận tải:",
          },
          {
            id: 30,
            content:
              "  Mặc dù Watt không trực tiếp làm tàu hỏa hay tàu thủy, nhưng động cơ quay tròn, hiệu suất cao của ông là tiền đề công nghệ trực tiếp cho phép Robert Fulton (tàu thủy) và George Stephenson (tàu hỏa) tạo ra các phương tiện giao thông chạy bằng hơi nước, kết nối thế giới và vận chuyển hàng hóa trên quy mô chưa từng có.",
          },
          {
            id: 31,
            content:
              "Tóm lại, James Watt đã cung cấp nguồn năng lượng nhân tạo, đáng tin cậy và hiệu quả đầu tiên cho nhân loại, cho phép quá trình chuyển đổi từ lao động thủ công sang sản xuất bằng máy móc, châm ngòi cho Cuộc Cách mạng Công nghiệp 1.0.",
          },
        ],
        imageUrl:
          "https://res.cloudinary.com/dt3uzyfcg/image/upload/v1762712219/dongcohoinuoc_p2hoyf.jpg",
      },
      {
        id: "1-3",
        year: "1769",
        title: "Máy kéo sợi Thủy lực",
        descriptions: [
          {
            id: 1,
            content:
              "Máy kéo sợi Thủy lực (Water Frame) được phát minh bởi Richard Arkwright vào năm 1769.",
          },
          {
            id: 2,
            content:
              "Đây là cỗ máy kéo sợi đầu tiên chạy hoàn toàn tự động bằng năng lượng - cụ thể là sức nước, không phải sức người.",
          },
          {
            id: 3,
            content:
              "Nó giải quyết điểm yếu của máy Spinning Jenny: Sợi Jenny tạo ra tuy nhiều nhưng khá yếu và thô.",
          },
          {
            id: 4,
            content:
              "Water Frame sử dụng một hệ thống các con lăn quay với tốc độ khác nhau để kéo dài và xoắn sợi bông.",
          },
          {
            id: 5,
            content:
              "Kết quả: Cỗ máy tạo ra loại sợi bông rất chắc, xoắn chặt và đồng đều, lý tưởng để làm sợi dọc (warp) trong dệt vải – điều mà sợi Jenny không làm tốt.",
          },
          {
            id: 6,
            content:
              'Đóng góp lớn nhất: Khai sinh ra "Hệ thống nhà máy" (Factory System).',
          },
          {
            id: 7,
            content:
              "Do cỗ máy này quá lớn, nặng và phải đặt cạnh nguồn nước (sông) để chạy, nó không thể được sử dụng trong các hộ gia đình (cottage industry) như máy Jenny.",
          },
          {
            id: 8,
            content:
              "Arkwright đã xây dựng các nhà máy chuyên dụng (nhà máy Cromford năm 1771 là nhà máy đầu tiên), nơi công nhân phải tập trung đến làm việc theo ca, tuân thủ kỷ luật nhà máy.",
          },
          {
            id: 9,
            content:
              "Đây là một sự thay đổi xã hội khổng lồ, chuyển đổi lao động từ phi tập trung tại nhà sang tập trung tại nhà máy.",
          },
        ],
        imageUrl:
          "https://res.cloudinary.com/dt3uzyfcg/image/upload/v1762719307/waterframe_ifwtbx.jpg",
      },
      {
        id: "1-4",
        year: "1779",
        title: 'Máy "Con la"',
        descriptions: [
          {
            id: 1,
            content:
              'Máy "Con la" (Spinning Mule) được phát minh bởi Samuel Crompton vào năm 1779.',
          },
          {
            id: 2,
            content:
              'Tên gọi "Con la" (Mule) bắt nguồn từ việc nó là cỗ máy "lai" giữa hai phát minh trước đó.',
          },
          {
            id: 3,
            content:
              "Nó kết hợp các con lăn kéo sợi của Water Frame (tạo sợi chắc) với giàn suốt di động của Spinning Jenny (tạo sợi mịn).",
          },
          {
            id: 4,
            content:
              "Kết quả: Cỗ máy tạo ra loại sợi vừa chắc (như Water Frame) lại vừa cực kỳ mịn (như Jenny), đạt chất lượng cao chưa từng có.",
          },
          {
            id: 5,
            content:
              "Đóng góp: Cho phép nước Anh lần đầu tiên sản xuất hàng loạt vải mỏng (muslin) cao cấp, một loại vải trước đây chỉ có thể nhập khẩu đắt đỏ từ Ấn Độ.",
          },
          {
            id: 6,
            content:
              "Nó giúp nước Anh thống trị thị trường dệt may toàn cầu, không chỉ về số lượng mà còn về chất lượng.",
          },
          {
            id: 7,
            content:
              "Spinning Mule ban đầu chạy bằng sức người, nhưng nhanh chóng được cải tiến để chạy bằng sức nước và sau đó là động cơ hơi nước, khiến nó trở thành cỗ máy kéo sợi tiêu chuẩn trong các nhà máy lớn.",
          },
        ],
        imageUrl:
          "https://res.cloudinary.com/dt3uzyfcg/image/upload/v1762719486/spinningmule_rzip8a.jpg",
      },
      {
        id: "1-5",
        year: "1785",
        title: "Máy dệt Cơ khí",
        descriptions: [
          {
            id: 1,
            content:
              "Máy dệt Cơ khí (Power Loom) được phát minh bởi Edmund Cartwright vào năm 1785.",
          },
          {
            id: 2,
            content:
              "Bối cảnh: Các máy kéo sợi (Jenny, Water Frame, Mule) đã tạo ra quá nhiều sợi, nhanh hơn nhiều so với khả năng dệt bằng tay của các thợ thủ công.",
          },
          {
            id: 3,
            content:
              'Một "nút thắt cổ chai" mới xuất hiện ở khâu dệt vải. Cartwright, một mục sư, đã thiết kế cỗ máy dệt tự động để giải quyết vấn đề này.',
          },
          {
            id: 4,
            content:
              "Cỗ máy này tự động hóa hoàn toàn quá trình dệt (đưa thoi, nâng hạ sợi dọc), ban đầu được thiết kế để chạy bằng sức nước.",
          },
          {
            id: 5,
            content:
              "Các phiên bản đầu tiên của Cartwright hoạt động không hiệu quả và không thành công về mặt thương mại.",
          },
          {
            id: 6,
            content:
              "Tuy nhiên, các kỹ sư khác đã cải tiến thiết kế này, và đến đầu những năm 1800, máy dệt cơ khí (được tích hợp động cơ hơi nước) đã trở nên phổ biến.",
          },
          {
            id: 7,
            content:
              "Đóng góp: Hoàn thiện chu trình sản xuất dệt may công nghiệp (từ sợi thô đến vải thành phẩm) bằng máy móc.",
          },
          {
            id: 8,
            content:
              "Nó đã thay thế hàng loạt thợ dệt thủ công, dẫn đến năng suất dệt vải tăng vọt và gây ra nhiều bất ổn xã hội (như phong trào Luddite).",
          },
        ],
        imageUrl:
          "https://res.cloudinary.com/dt3uzyfcg/image/upload/v1762719635/powerloom_mtboei.jpg",
      },
      {
        id: "1-6",
        year: "1793",
        title: "Máy tách hạt Bông",
        descriptions: [
          {
            id: 1,
            content:
              "Máy tách hạt Bông (Cotton Gin) được phát minh bởi Eli Whitney (người Mỹ) vào năm 1793.",
          },
          {
            id: 2,
            content:
              "Đây là một mắt xích sống còn, kết nối ngành trồng trọt ở Mỹ với các nhà máy dệt ở Anh.",
          },
          {
            id: 3,
            content:
              "Vấn đề: Loại bông sợi ngắn (upland cotton) có thể trồng dễ dàng ở miền Nam nước Mỹ, nhưng hạt của nó bám rất chặt vào xơ.",
          },
          {
            id: 4,
            content:
              "Một công nhân phải mất cả ngày trời để tách bằng tay được khoảng 1 pound (0.45 kg) bông sạch.",
          },
          {
            id: 5,
            content:
              "Phát minh: Máy của Whitney là một thiết bị cơ khí đơn giản, dùng các móc nhỏ kéo xơ bông qua một tấm lưới, giữ hạt bông lại.",
          },
          {
            id: 6,
            content:
              "Tác động ngay lập tức: Một máy Cotton Gin nhỏ có thể xử lý 50 pound (23 kg) bông mỗi ngày, tăng năng suất 50 lần.",
          },
          {
            id: 7,
            content:
              "Đóng góp 1: Nó biến bông sợi ngắn thành một cây trồng lợi nhuận khổng lồ, tạo ra nguồn cung bông thô giá rẻ vô tận.",
          },
          {
            id: 8,
            content:
              'Đóng góp 2: Cung cấp "nhiên liệu" (nguyên liệu thô) cho các nhà máy dệt đang "đói" bông ở Anh, thúc đẩy toàn bộ ngành công nghiệp.',
          },
          {
            id: 9,
            content:
              "Tác động xã hội tiêu cực: Thay vì giảm nhu cầu lao động, nó lại làm tăng mạnh nhu cầu về nô lệ ở Mỹ để trồng và thu hoạch nhiều bông hơn.",
          },
        ],
        imageUrl:
          "https://res.cloudinary.com/dt3uzyfcg/image/upload/v1762719722/cottongin_yi5fh7.jpg",
      },
      {
        id: "1-7",
        year: "1825",
        title: "Tuyến đường sắt Stockton và Darlington",
        descriptions: [
          {
            id: 2,
            content:
              "Đây được công nhận rộng rãi là tuyến đường sắt công cộng đầu tiên trên thế giới sử dụng đầu máy hơi nước.",
          },
          {
            id: 3,
            content: "Sự kiện quan trọng năm 1825",
          },
          {
            id: 4,
            content: "1. Mục đích ban đầu:",
          },
          {
            id: 5,
            content:
              "Tuyến đường sắt này ban đầu được xây dựng với mục đích chính là vận chuyển than đá từ các mỏ ở Shildon (gần Darlington) đến cảng Stockton-on-Tees để xuất khẩu.",
          },
          {
            id: 6,
            content: '2. Đầu máy huyền thoại: "Locomotion No. 1"',
          },
          {
            id: 7,
            content:
              'Người đứng sau thành công này là George Stephenson, một kỹ sư thiên tài (thường được gọi là "Cha đẻ của đường sắt").',
          },
          {
            id: 8,
            content:
              'Stephenson đã thiết kế và chế tạo đầu máy hơi nước cho tuyến đường này, chiếc nổi tiếng nhất là "Locomotion No. 1".',
          },
          {
            id: 9,
            content:
              'Vào ngày khai trương (27 tháng 9 năm 1825), "Locomotion No. 1" đã kéo một đoàn tàu bao gồm các toa chở than và một toa chở hành khách đặc biệt (gọi là "The Experiment"), di chuyển với tốc độ lên tới 24 km/giờ (15 dặm/giờ) – một tốc độ đáng kinh ngạc vào thời điểm đó.',
          },
          {
            id: 10,
            content: "3. Bước ngoặt: Vận tải công cộng",
          },
          {
            id: 11,
            content:
              'Mặc dù mục đích chính là chở hàng (than), S&DR ngay lập tức bắt đầu chở hành khách. Ban đầu, họ dùng xe ngựa kéo trên đường ray, nhưng thành công của "Locomotion" đã chứng minh tính khả thi của việc dùng hơi nước cho cả hàng hóa lẫn con người.',
          },
          {
            id: 12,
            content: "Đóng góp cho Cách mạng Công nghiệp 1.0",
          },
          {
            id: 13,
            content:
              "Sự ra đời của tuyến đường sắt này là một bước nhảy vọt, áp dụng trực tiếp sức mạnh của động cơ hơi nước (đã được James Watt hoàn thiện) vào giao thông vận tải:",
          },
          {
            id: 14,
            content: "1. Ứng dụng thực tế của động cơ hơi nước di động:",
          },
          {
            id: 15,
            content:
              "Nó chứng minh rằng động cơ hơi nước không chỉ dùng để bơm nước mỏ than (Newcomen) hay cung cấp năng lượng cho nhà máy dệt (Watt), mà còn có thể tự di chuyển và kéo tải nặng.",
          },
          {
            id: 16,
            content: "2. Cách mạng hóa vận tải hàng hóa:",
          },
          {
            id: 17,
            content:
              "Lần đầu tiên, hàng hóa nặng (như than, sắt) có thể được vận chuyển sâu trong đất liền một cách nhanh chóng, rẻ và đáng tin cậy, không còn phụ thuộc hoàn toàn vào kênh đào hay đường bộ lầy lội. Điều này giúp giảm chi phí nguyên liệu thô cho các nhà máy.",
          },
          {
            id: 18,
            content: '3. Khởi đầu "Kỷ nguyên Đường sắt":',
          },
          {
            id: 19,
            content:
              'Thành công của S&DR đã châm ngòi cho một "cơn sốt" xây dựng đường sắt trên khắp nước Anh và thế giới. Chỉ 5 năm sau (1830), tuyến đường sắt Liverpool và Manchester (cũng do Stephenson xây dựng) ra đời, tuyến đầu tiên chỉ sử dụng đầu máy hơi nước và vận hành theo lịch trình cố định cho hành khách.',
          },
          {
            id: 20,
            content:
              "Tóm lại, tuyến đường sắt Stockton và Darlington 1825 là minh chứng thực tế đầu tiên cho thấy sức mạnh hơi nước có thể thay đổi vĩnh viễn cách con người và hàng hóa di chuyển, mở ra kỷ nguyên giao thông vận tải hàng loạt.",
          },
        ],
        imageUrl:
          "https://res.cloudinary.com/dt3uzyfcg/image/upload/v1762719797/stockhomanddarlington_fhfm28.jpg",
      },
      {
        id: "1-8",
        year: "1837",
        title: "Máy điện báo",
        descriptions: [
          {
            id: 1,
            content:
              "Máy điện báo thương mại thực tế được phát minh gần như đồng thời bởi Cooke & Wheatstone ở Anh (1837) và Samuel Morse ở Mỹ (1837).",
          },
          {
            id: 2,
            content:
              "Đây là cuộc cách mạng thực sự trong lĩnh vực giao tiếp, diễn ra vào giai đoạn sau của Cách mạng 1.0.",
          },
          {
            id: 3,
            content:
              "Bước đột phá: Lần đầu tiên trong lịch sử, thông tin có thể di chuyển nhanh hơn phương tiện vận tải vật lý (như tàu hỏa hay tàu thủy).",
          },
          {
            id: 4,
            content:
              "Nó cho phép truyền tin nhắn gần như tức thời qua khoảng cách xa bằng cách sử dụng tín hiệu điện qua dây dẫn.",
          },
          {
            id: 5,
            content:
              "Hệ thống của Morse (sử dụng Mã Morse) đã trở nên phổ biến hơn vì thiết kế đơn giản và hiệu quả.",
          },
          {
            id: 6,
            content:
              "Đóng góp 1 (Quan trọng nhất): Cách mạng hóa ngành đường sắt. Điện báo cho phép điều phối lịch trình tàu, báo cáo tai nạn và quản lý các tuyến đường ray đơn một cách an toàn.",
          },
          {
            id: 7,
            content:
              "Đóng góp 2: Thay đổi hoàn toàn cách thức kinh doanh. Các công ty có thể đặt hàng, nhận báo giá thị trường chứng khoán và quản lý chi nhánh từ xa.",
          },
          {
            id: 8,
            content:
              'Đóng góp 3: Đặt nền móng cho thời đại viễn thông toàn cầu, làm "thu hẹp" thế giới.',
          },
        ],
        imageUrl:
          "https://res.cloudinary.com/dt3uzyfcg/image/upload/v1762719857/telegraph_zdrdxq.jpg",
      },
      {
        id: "1-9",
        year: " ",
        title: "Tác động chính",
        descriptions: [
          {
            id: 1,
            content:
              "1. Sự ra đời của hệ thống nhà máy (Factory System), tập trung lao động và máy móc tại một địa điểm.",
          },
          {
            id: 2,
            content:
              "2. Đô thị hóa nhanh chóng: Dân cư từ nông thôn ồ ạt di chuyển đến các thành phố để làm việc trong nhà máy.",
          },
          {
            id: 3,
            content:
              "3. Cách mạng giao thông vận tải: Tàu hỏa và tàu thủy chạy bằng hơi nước ra đời, rút ngắn khoảng cách và thúc đẩy thương mại toàn cầu.",
          },
          {
            id: 4,
            content:
              "4. Hình thành hai giai cấp xã hội mới rõ rệt: Giai cấp tư sản công nghiệp và giai cấp vô sản (công nhân nhà máy).",
          },
        ],
        imageUrl:
          "https://res.cloudinary.com/dt3uzyfcg/image/upload/v1762719975/1_0_thgzlp.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Cách mạng Điện khí hóa",
    engTitle: "Technological Revolution",
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
