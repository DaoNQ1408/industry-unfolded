export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  points: number;
  explanation?: string;
}

export const quizData: QuizQuestion[] = [
  {
    "id": "q1",
    "question": "Phát minh nào được coi là biểu tượng và động lực chính của Cách mạng công nghiệp lần thứ nhất?",
    "options": [
      { "id": "q1-a", "text": "Động cơ hơi nước", "isCorrect": true },
      { "id": "q1-b", "text": "Bóng đèn điện", "isCorrect": false },
      { "id": "q1-c", "text": "Máy tính cá nhân", "isCorrect": false },
      { "id": "q1-d", "text": "Internet", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Cách mạng công nghiệp 1.0 (cuối thế kỷ 18) đặc trưng bởi sự cơ khí hóa, và động cơ hơi nước là phát minh then chốt."
  },
  {
    "id": "q2",
    "question": "Cách mạng công nghiệp 1.0 bắt đầu ở quốc gia nào?",
    "options": [
      { "id": "q2-a", "text": "Pháp", "isCorrect": false },
      { "id": "q2-b", "text": "Hoa Kỳ", "isCorrect": false },
      { "id": "q2-c", "text": "Đức", "isCorrect": false },
      { "id": "q2-d", "text": "Anh (Vương quốc Anh)", "isCorrect": true }
    ],
    "points": 10,
    "explanation": "Cách mạng công nghiệp lần thứ nhất khởi phát tại Anh vào khoảng năm 1784 với các phát minh trong ngành dệt may và máy hơi nước."
  },
  {
    "id": "q3",
    "question": "Ngành công nghiệp nào được cơ khí hóa đầu tiên và mạnh mẽ nhất trong CMCN 1.0?",
    "options": [
      { "id": "q3-a", "text": "Dệt may", "isCorrect": true },
      { "id": "q3-b", "text": "Sản xuất ô tô", "isCorrect": false },
      { "id": "q3-c", "text": "Hóa chất", "isCorrect": false },
      { "id": "q3-d", "text": "Điện tử", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Các máy móc như máy kéo sợi Jenny và máy dệt chạy bằng hơi nước đã cách mạng hóa ngành dệt may, biến nó thành ngành tiên phong của CMCN 1.0."
  },
  {
    "id": "q4",
    "question": "Cách mạng công nghiệp lần thứ hai (2.0) gắn liền với việc sử dụng rộng rãi nguồn năng lượng nào?",
    "options": [
      { "id": "q4-a", "text": "Hơi nước", "isCorrect": false },
      { "id": "q4-b", "text": "Điện", "isCorrect": true },
      { "id": "q4-c", "text": "Năng lượng hạt nhân", "isCorrect": false },
      { "id": "q4-d", "text": "Năng lượng mặt trời", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "CMCN 2.0 (cuối thế kỷ 19, đầu thế kỷ 20) được định nghĩa bởi điện khí hóa và sản xuất hàng loạt."
  },
  {
    "id": "q5",
    "question": "Khái niệm 'Dây chuyền sản xuất hàng loạt' gắn liền với nhân vật nào và trong cuộc CMCN nào?",
    "options": [
      { "id": "q5-a", "text": "James Watt (CMCN 1.0)", "isCorrect": false },
      { "id": "q5-b", "text": "Henry Ford (CMCN 2.0)", "isCorrect": true },
      { "id": "q5-c", "text": "Bill Gates (CMCN 3.0)", "isCorrect": false },
      { "id": "q5-d", "text": "Klaus Schwab (CMCN 4.0)", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Henry Ford đã tiên phong áp dụng dây chuyền lắp ráp cho sản xuất ô tô (mẫu Model T), trở thành biểu tượng của CMCN 2.0."
  },
  {
    "id": "q6",
    "question": "Vật liệu nào trở thành vật liệu xây dựng và công nghiệp chủ đạo trong CMCN 2.0?",
    "options": [
      { "id": "q6-a", "text": "Gỗ", "isCorrect": false },
      { "id": "q6-b", "text": "Sắt", "isCorrect": false },
      { "id": "q6-c", "text": "Thép", "isCorrect": true },
      { "id": "q6-d", "text": "Nhôm", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Việc phát minh ra quy trình Bessemer giúp sản xuất thép giá rẻ, hàng loạt, thúc đẩy xây dựng đường sắt, nhà cao tầng và máy móc trong CMCN 2.0."
  },
  {
    "id": "q7",
    "question": "Cách mạng công nghiệp lần thứ ba (3.0) bắt đầu vào khoảng thời gian nào?",
    "options": [
      { "id": "q7-a", "text": "Cuối thế kỷ 18", "isCorrect": false },
      { "id": "q7-b", "text": "Cuối thế kỷ 19", "isCorrect": false },
      { "id": "q7-c", "text": "Nửa cuối thế kỷ 20 (từ 1970s)", "isCorrect": true },
      { "id": "q7-d", "text": "Đầu thế kỷ 21 (từ 2010s)", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "CMCN 3.0, hay Cách mạng số, bắt đầu từ những năm 1970 với sự phát triển của máy tính và điện tử."
  },
  {
    "id": "q8",
    "question": "Phát minh cốt lõi nào định hình Cách mạng công nghiệp 3.0?",
    "options": [
      { "id": "q8-a", "text": "Động cơ hơi nước", "isCorrect": false },
      { "id": "q8-b", "text": "Dây chuyền lắp ráp", "isCorrect": false },
      { "id": "q8-c", "text": "Bóng bán dẫn và vi mạch", "isCorrect": true },
      { "id": "q8-d", "text": "Trí tuệ nhân tạo (AI)", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Sự phát minh ra bóng bán dẫn và sau đó là vi mạch (chip) đã mở đường cho máy tính cá nhân, điện tử tiêu dùng và tự động hóa."
  },
  {
    "id": "q9",
    "question": "CMCN 3.0 đã mở ra kỷ nguyên nào cho nhân loại?",
    "options": [
      { "id": "q9-a", "text": "Kỷ nguyên cơ khí", "isCorrect": false },
      { "id": "q9-b", "text": "Kỷ nguyên điện khí", "isCorrect": false },
      { "id": "q9-c", "text": "Kỷ nguyên Thông tin (Kỷ nguyên số)", "isCorrect": true },
      { "id": "q9-d", "text": "Kỷ nguyên không gian mạng-vật lý", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Với máy tính và Internet, CMCN 3.0 đã chuyển trọng tâm từ công nghiệp cơ khí sang xử lý và chia sẻ thông tin."
  },
  {
    "id": "q10",
    "question": "Thuật ngữ 'Cách mạng công nghiệp 4.0' lần đầu tiên được giới thiệu ở quốc gia nào?",
    "options": [
      { "id": "q10-a", "text": "Hoa Kỳ", "isCorrect": false },
      { "id": "q10-b", "text": "Nhật Bản", "isCorrect": false },
      { "id": "q10-c", "text": "Đức", "isCorrect": true },
      { "id": "q10-d", "text": "Trung Quốc", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Thuật ngữ 'Industrie 4.0' (Công nghiệp 4.0) được đưa ra tại Hội chợ Hannover ở Đức vào năm 2011, là một phần của chiến lược công nghệ cao của chính phủ Đức."
  },
  // {
  //   "id": "q11",
  //   "question": "Công nghệ cốt lõi của Cách mạng công nghiệp 4.0 là gì?",
  //   "options": [
  //     { "id": "q11-a", "text": "Tự động hóa đơn giản", "isCorrect": false },
  //     { "id": "q11-b", "text": "Hệ thống không gian mạng-vật lý (Cyber-Physical Systems)", "isCorrect": true },
  //     { "id": "q11-c", "text": "Sản xuất hàng loạt", "isCorrect": false },
  //     { "id": "q11-d", "text": "Điện khí hóa", "isCorrect": false }
  //   ],
  //   "points": 10,
  //   "explanation": "CMCN 4.0 dựa trên Hệ thống không gian mạng-vật lý (CPS), nơi thế giới ảo (phần mềm, dữ liệu) và thế giới thực (máy móc) hội tụ."
  // },
  {
    "id": "q12",
    "question": "Thuật ngữ nào sau đây KHÔNG liên quan trực tiếp đến CMCN 4.0?",
    "options": [
      { "id": "q12-a", "text": "Internet vạn vật (IoT)", "isCorrect": false },
      { "id": "q12-b", "text": "Trí tuệ nhân tạo (AI)", "isCorrect": false },
      { "id": "q12-c", "text": "Điện toán đám mây (Cloud Computing)", "isCorrect": false },
      { "id": "q12-d", "text": "Sản xuất cơ khí (CMCN 1.0)", "isCorrect": true }
    ],
    "points": 10,
    "explanation": "Sản xuất cơ khí (dùng máy hơi nước) là đặc trưng của CMCN 1.0. CMCN 4.0 là sự kết hợp của AI, IoT, Big Data, Cloud..."
  },
  {
    "id": "q13",
    "question": "'Internet vạn vật' (Internet of Things - IoT) nghĩa là gì?",
    "options": [
      { "id": "q13-a", "text": "Chỉ dùng Internet để lướt web", "isCorrect": false },
      { "id": "q13-b", "text": "Mạng lưới kết nối máy tính với máy tính", "isCorrect": false },
      { "id": "q13-c", "text": "Mạng lưới các thiết bị vật lý (đồ gia dụng, xe cộ...) được kết nối Internet", "isCorrect": true },
      { "id": "q13-d", "text": "Một loại tiền ảo", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "IoT là mạng lưới các thiết bị, phương tiện và các vật phẩm khác được nhúng cảm biến, phần mềm để kết nối và trao đổi dữ liệu qua Internet."
  },
  {
    "id": "q14",
    "question": "Khái niệm 'Nhà máy thông minh' (Smart Factory) thuộc về cuộc cách mạng nào?",
    "options": [
      { "id": "q14-a", "text": "Cách mạng công nghiệp 1.0", "isCorrect": false },
      { "id": "q14-b", "text": "Cách mạng công nghiệp 2.0", "isCorrect": false },
      { "id": "q14-c", "text": "Cách mạng công nghiệp 3.0", "isCorrect": false },
      { "id": "q14-d", "text": "Cách mạng công nghiệp 4.0", "isCorrect": true }
    ],
    "points": 10,
    "explanation": "Nhà máy thông minh là biểu hiện của CMCN 4.0, nơi máy móc, robot và hệ thống logistics tự giao tiếp và vận hành."
  },
  {
    "id": "q15",
    "question": "Yếu tố nào phân biệt rõ rệt nhất giữa CMCN 3.0 và CMCN 4.0?",
    "options": [
      { "id": "q15-a", "text": "Sự xuất hiện của máy tính", "isCorrect": false },
      { "id": "q15-b", "text": "Sự hội tụ của công nghệ, tốc độ và quy mô", "isCorrect": true },
      { "id": "q15-c", "text": "Việc sử dụng điện", "isCorrect": false },
      { "id": "q15-d", "text": "Việc cơ khí hóa", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "CMCN 4.0 không chỉ là kỹ thuật số (như 3.0) mà còn là sự hội tụ sâu sắc giữa thế giới vật lý, kỹ thuật số và sinh học với tốc độ thay đổi đột phá."
  },
  {
    "id": "q16",
    "question": "Trí tuệ nhân tạo (AI) đóng vai trò gì trong CMCN 4.0?",
    "options": [
      { "id": "q16-a", "text": "Là một ý tưởng khoa học viễn tưởng", "isCorrect": false },
      { "id": "q16-b", "text": "Chỉ dùng để chơi game", "isCorrect": false },
      { "id": "q16-c", "text": "Là công nghệ lõi, giúp phân tích dữ liệu và ra quyết định tự động", "isCorrect": true },
      { "id": "q16-d", "text": "Không liên quan, AI thuộc CMCN 3.0", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "AI là một trong những trụ cột chính của CMCN 4.0, cho phép máy móc 'học' từ dữ liệu (Machine Learning) và tự động hóa các quy trình phức tạp."
  },
  {
    "id": "q17",
    "question": "CMCN 1.0 dựa trên máy hơi nước, CMCN 2.0 dựa trên điện, CMCN 3.0 dựa trên máy tính. CMCN 4.0 dựa trên cái gì?",
    "options": [
      { "id": "q17-a", "text": "Năng lượng hạt nhân", "isCorrect": false },
      { "id": "q17-b", "text": "Dữ liệu (Data) và Trí tuệ (Intelligence)", "isCorrect": true },
      { "id": "q17-c", "text": "Robot hình người", "isCorrect": false },
      { "id": "q17-d", "text": "Internet tốc độ cao", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "CMCN 4.0 được vận hành bởi Dữ liệu lớn (Big Data) và khả năng xử lý dữ liệu đó để tạo ra trí tuệ (AI), kết nối vạn vật (IoT)."
  },
  {
    "id": "q18",
    "question": "Đâu là thách thức lớn nhất của Cách mạng công nghiệp 4.0?",
    "options": [
      { "id": "q18-a", "text": "Thiếu điện sản xuất", "isCorrect": false },
      { "id": "q18-b", "text": "Thiếu than đá", "isCorrect": false },
      { "id": "q18-c", "text": "Tác động đến thị trường lao động và yêu cầu kỹ năng mới", "isCorrect": true },
      { "id": "q18-d", "text": "Tốc độ Internet chậm", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "CMCN 4.0 dự kiến sẽ thay thế nhiều công việc truyền thống bằng tự động hóa và AI, đồng thời đòi hỏi lực lượng lao động phải có kỹ năng số và khả năng thích ứng cao."
  },
  {
    "id": "q19",
    "question": "Sự khác biệt chính giữa tự động hóa trong CMCN 3.0 và 4.0 là gì?",
    "options": [
      { "id": "q19-a", "text": "3.0 dùng robot, 4.0 không dùng", "isCorrect": false },
      { "id": "q19-b", "text": "3.0 tự động hóa (lập trình sẵn), 4.0 tự trị (tự ra quyết định)", "isCorrect": true },
      { "id": "q19-c", "text": "3.0 đắt đỏ, 4.0 rẻ hơn", "isCorrect": false },
      { "id": "q19-d", "text": "Không có sự khác biệt", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "CMCN 3.0 tập trung vào tự động hóa (Automation) các tác vụ lặp đi lặp lại. CMCN 4.0 hướng tới hệ thống tự trị (Autonomy), nơi máy móc có thể tự học, tự thích nghi và ra quyết định."
  },
  {
    "id": "q20",
    "question": "Công nghệ sinh học (Biotechnology) và Công nghệ gen (Genetic Engineering) được xem là một phần của cuộc cách mạng nào?",
    "options": [
      { "id": "q20-a", "text": "Cách mạng công nghiệp 1.0", "isCorrect": false },
      { "id": "q20-b", "text": "Cách mạng công nghiệp 2.0", "isCorrect": false },
      { "id": "q20-c", "text": "Cách mạng công nghiệp 3.0", "isCorrect": false },
      { "id": "q20-d", "text": "Cách mạng công nghiệp 4.0", "isCorrect": true }
    ],
    "points": 10,
    "explanation": "CMCN 4.0 là sự hội tụ của nhiều lĩnh vực, bao gồm cả thế giới sinh học. Các đột phá về gen, y học cá nhân hóa là một phần quan trọng của 4.0."
  },
  {
    "id": "q21",
    "question": "Cuộc Cách mạng công nghiệp 1.0 dẫn đến sự ra đời của giai cấp xã hội mới nào?",
    "options": [
      { "id": "q21-a", "text": "Địa chủ và nông dân", "isCorrect": false },
      { "id": "q21-b", "text": "Giai cấp vô sản (công nhân nhà máy)", "isCorrect": true },
      { "id": "q21-c", "text": "Thương nhân và thợ thủ công", "isCorrect": false },
      { "id": "q21-d", "text": "Giai cấp tư sản và quý tộc", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "CMCN 1.0 với hệ thống nhà máy đã hình thành nên giai cấp công nhân (vô sản), những người bán sức lao động của mình."
  },
  {
    "id": "q22",
    "question": "Phát minh 'Máy kéo sợi Jenny' (Spinning Jenny) của James Hargreaves thuộc cuộc cách mạng nào?",
    "options": [
      { "id": "q22-a", "text": "Cách mạng công nghiệp 1.0", "isCorrect": true },
      { "id": "q22-b", "text": "Cách mạng công nghiệp 2.0", "isCorrect": false },
      { "id": "q22-c", "text": "Cách mạng công nghiệp 3.0", "isCorrect": false },
      { "id": "q22-d", "text": "Cách mạng công nghiệp 4.0", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Spinning Jenny là một trong những phát minh quan trọng đầu tiên trong ngành dệt, thúc đẩy CMCN 1.0 tại Anh."
  },
  {
    "id": "q23",
    "question": "Nguồn nhiên liệu hóa thạch nào đã 'tiếp lửa' cho máy hơi nước và trở thành biểu tượng năng lượng của CMCN 1.0?",
    "options": [
      { "id": "q23-a", "text": "Dầu mỏ", "isCorrect": false },
      { "id": "q23-b", "text": "Khí tự nhiên", "isCorrect": false },
      { "id": "q23-c", "text": "Than đá", "isCorrect": true },
      { "id": "q23-d", "text": "Urani", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Than đá được sử dụng rộng rãi để đun sôi nước, tạo hơi nước vận hành máy móc, tàu hỏa, tàu thủy trong suốt CMCN 1.0."
  },
  {
    "id": "q24",
    "question": "Phát minh nào sau đây KHÔNG thuộc Cách mạng công nghiệp 2.0?",
    "options": [
      { "id": "q24-a", "text": "Điện thoại (Alexander Graham Bell)", "isCorrect": false },
      { "id": "q24-b", "text": "Động cơ đốt trong (ô tô)", "isCorrect": false },
      { "id": "q24-c", "text": "Bóng đèn điện (Thomas Edison)", "isCorrect": false },
      { "id": "q24-d", "text": "Động cơ hơi nước (James Watt)", "isCorrect": true }
    ],
    "points": 10,
    "explanation": "Động cơ hơi nước là biểu tượng của CMCN 1.0, trong khi điện thoại, ô tô và bóng đèn điện là những thành tựu rực rỡ của CMCN 2.0."
  },
  {
    "id": "q25",
    "question": "Quá trình sản xuất thép giá rẻ (quy trình Bessemer) đã thúc đẩy ngành nào phát triển vượt bậc trong CMCN 2.0?",
    "options": [
      { "id": "q25-a", "text": "Công nghiệp dệt may", "isCorrect": false },
      { "id": "q25-b", "text": "Xây dựng (nhà cao tầng) và Đường sắt", "isCorrect": true },
      { "id": "q25-c", "text": "Sản xuất máy tính", "isCorrect": false },
      { "id": "q25-d", "text": "Nông nghiệp", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Thép rẻ và bền đã cho phép xây dựng các tòa nhà cao hơn, cầu dài hơn và mạng lưới đường sắt rộng khắp, thay thế cho sắt của CMCN 1.0."
  },
  {
    "id": "q26",
    "question": "Ngoài Hoa Kỳ, quốc gia nào ở Châu Âu trỗi dậy mạnh mẽ và trở thành cường quốc công nghiệp hàng đầu trong CMCN 2.0?",
    "options": [
      { "id": "q26-a", "text": "Đức", "isCorrect": true },
      { "id": "q26-b", "text": "Tây Ban Nha", "isCorrect": false },
      { "id": "q26-c", "text": "Ý", "isCorrect": false },
      { "id": "q26-d", "text": "Bồ Đào Nha", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Cách mạng công nghiệp 2.0 chứng kiến sự vươn lên mạnh mẽ của Hoa Kỳ và đặc biệt là Đức, vượt qua Anh trong nhiều lĩnh vực công nghiệp nặng và hóa chất."
  },
  {
    "id": "q27",
    "question": "Thiết bị 'PLC' (Programmable Logic Controller) ra đời trong CMCN 3.0 dùng để làm gì?",
    "options": [
      { "id": "q27-a", "text": "Chơi trò chơi điện tử", "isCorrect": false },
      { "id": "q27-b", "text": "Nghe nhạc cá nhân", "isCorrect": false },
      { "id": "q27-c", "text": "Tự động hóa dây chuyền sản xuất và máy móc công nghiệp", "isCorrect": true },
      { "id": "q27-d", "text": "Kết nối Internet", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "PLC là bộ điều khiển logic có thể lập trình, một loại máy tính công nghiệp chuyên dụng, là trái tim của tự động hóa trong CMCN 3.0."
  },
  {
    "id": "q28",
    "question": "Sự phát triển của Internet và máy tính cá nhân (PC) trong CMCN 3.0 đã thúc đẩy mạnh mẽ xu hướng nào?",
    "options": [
      { "id": "q28-a", "text": "Toàn cầu hóa (Globalization)", "isCorrect": true },
      { "id": "q28-b", "text": "Chủ nghĩa bảo hộ", "isCorrect": false },
      { "id": "q28-c", "text": "Sản xuất thủ công", "isCorrect": false },
      { "id": "q28-d", "text": "Cô lập kinh tế", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Internet và công nghệ thông tin đã giúp kết nối thế giới, cho phép thông tin, vốn và hàng hóa lưu chuyển dễ dàng hơn, thúc đẩy toàn cầu hóa."
  },
  {
    "id": "q29",
    "question": "Phát minh nào là nền tảng vật lý cho toàn bộ Cách mạng số (CMCN 3.0)?",
    "options": [
      { "id": "q29-a", "text": "Đèn ống chân không", "isCorrect": false },
      { "id": "q29-b", "text": "Bóng bán dẫn (Transistor)", "isCorrect": true },
      { "id": "q29-c", "text": "Pin điện", "isCorrect": false },
      { "id": "q29-d", "text": "Động cơ điện", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Sự phát minh ra bóng bán dẫn (transistor) và sau đó là vi mạch (IC) đã cho phép thu nhỏ và tăng sức mạnh của thiết bị điện tử, khai sinh ra máy tính."
  },
  {
    "id": "q30",
    "question": "Ai là người đã phổ biến rộng rãi thuật ngữ 'Cách mạng công nghiệp lần thứ tư' (The Fourth Industrial Revolution) thông qua sách và Diễn đàn Kinh tế Thế giới (WEF)?",
    "options": [
      { "id": "q30-a", "text": "Bill Gates", "isCorrect": false },
      { "id": "q30-b", "text": "Steve Jobs", "isCorrect": false },
      { "id": "q30-c", "text": "Elon Musk", "isCorrect": false },
      { "id": "q30-d", "text": "Klaus Schwab", "isCorrect": true }
    ],
    "points": 10,
    "explanation": "Klaus Schwab, người sáng lập Diễn đàn Kinh tế Thế giới (WEF), là tác giả cuốn sách 'Cách mạng công nghiệp lần thứ tư' và là người thúc đẩy thuật ngữ này trên toàn cầu."
  },
  {
    "id": "q31",
    "question": "Khái niệm 'Digital Twin' (Bản sao số) trong CMCN 4.0 là gì?",
    "options": [
      { "id": "q31-a", "text": "Một loại tiền điện tử mới", "isCorrect": false },
      { "id": "q31-b", "text": "Một robot giống hệt người", "isCorrect": false },
      { "id": "q31-c", "text": "Bản sao mô phỏng kỹ thuật số của một vật thể hoặc hệ thống vật lý", "isCorrect": true },
      { "id": "q31-d", "text": "Một phần mềm diệt virus", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Digital Twin là một bản sao ảo, cập nhật theo thời gian thực của một đối tượng vật lý, cho phép giám sát, phân tích và tối ưu hóa mà không cần can thiệp trực tiếp."
  },
  {
    "id": "q32",
    "question": "Công nghệ nào của CMCN 4.0 cho phép tạo ra các sản phẩm vật lý bằng cách đắp từng lớp vật liệu?",
    "options": [
      { "id": "q32-a", "text": "In 3D (Sản xuất bồi đắp)", "isCorrect": true },
      { "id": "q32-b", "text": "Điện toán đám mây", "isCorrect": false },
      { "id": "q32-c", "text": "Blockchain", "isCorrect": false },
      { "id": "q32-d", "text": "Big Data", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "In 3D, hay Sản xuất bồi đắp (Additive Manufacturing), là một trụ cột của CMCN 4.0, cho phép sản xuất theo yêu cầu và tạo ra các thiết kế phức tạp."
  },
  {
    "id": "q33",
    "question": "Công nghệ 'Blockchain' trong CMCN 4.0 chủ yếu giải quyết vấn đề gì?",
    "options": [
      { "id": "q33-a", "text": "Tăng tốc độ Internet", "isCorrect": false },
      { "id": "q33-b", "text": "Tạo ra robot thông minh hơn", "isCorrect": false },
      { "id": "q33-c", "text": "Tạo ra cơ sở dữ liệu phi tập trung, an toàn và minh bạch", "isCorrect": true },
      { "id": "q33-d", "text": "Làm cho máy tính chạy nhanh hơn", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Blockchain là một công nghệ sổ cái phân tán, đảm bảo tính minh bạch, bất biến và an toàn cho các giao dịch hoặc dữ liệu mà không cần bên trung gian tin cậy."
  },
  {
    "id": "q34",
    "question": "Khả năng phân tích lượng dữ liệu khổng lồ, phức tạp và phi cấu trúc là đặc điểm của công nghệ nào trong CMCN 4.0?",
    "options": [
      { "id": "q34-a", "text": "Dữ liệu lớn (Big Data)", "isCorrect": true },
      { "id": "q34-b", "text": "Điện báo (CMCN 2.0)", "isCorrect": false },
      { "id": "q34-c", "text": "Máy dệt (CMCN 1.0)", "isCorrect": false },
      { "id": "q34-d", "text": "Sản xuất hàng loạt (CMCN 2.0)", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Big Data là thuật ngữ chỉ việc xử lý và phân tích các tập dữ liệu cực lớn mà các công cụ truyền thống không thể xử lý, là 'nhiên liệu' cho AI trong CMCN 4.0."
  },
  {
    "id": "q35",
    "question": "Nếu CMCN 2.0 hướng tới 'Sản xuất hàng loạt' (Mass Production), thì CMCN 4.0 hướng tới điều gì?",
    "options": [
      { "id": "q35-a", "text": "Sản xuất thủ công hoàn toàn", "isCorrect": false },
      { "id": "q35-b", "text": "'Cá nhân hóa hàng loạt' (Mass Customization)", "isCorrect": true },
      { "id": "q35-c", "text": "Chỉ sản xuất cho quân đội", "isCorrect": false },
      { "id": "q35-d", "text": "Ngừng sản xuất", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Nhờ AI, IoT và In 3D, CMCN 4.0 cho phép các nhà máy thông minh sản xuất các sản phẩm được tùy chỉnh theo ý muốn của từng khách hàng với chi phí như sản xuất hàng loạt."
  },
  {
    "id": "q36",
    "question": "Sự hội tụ của các lĩnh vực công nghệ (vật lý, kỹ thuật số, sinh học) là đặc điểm nổi bật của cuộc cách mạng nào?",
    "options": [
      { "id": "q36-a", "text": "Cách mạng công nghiệp 1.0", "isCorrect": false },
      { "id": "q36-b", "text": "Cách mạng công nghiệp 2.0", "isCorrect": false },
      { "id": "q36-c", "text": "Cách mạng công nghiệp 3.0", "isCorrect": false },
      { "id": "q36-d", "text": "Cách mạng công nghiệp 4.0", "isCorrect": true }
    ],
    "points": 10,
    "explanation": "Đặc điểm cốt lõi của CMCN 4.0 là sự xóa nhòa ranh giới giữa các hệ thống vật lý (robot), kỹ thuật số (AI, IoT) và sinh học (công nghệ gen)."
  },
  {
    "id": "q37",
    "question": "Trong CMCN 1.0, các nhà máy thường được đặt ở đâu để tận dụng năng lượng?",
    "options": [
      { "id": "q37-a", "text": "Gần các con sông (để chạy bánh xe nước)", "isCorrect": true },
      { "id": "q37-b", "text": "Trên đỉnh núi (để đón gió)", "isCorrect": false },
      { "id": "q37-c", "text": "Giữa sa mạc (để có nhiều không gian)", "isCorrect": false },
      { "id": "q37-d", "text": "Trong trung tâm thành phố (để gần chợ)", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Trước khi động cơ hơi nước (chạy bằng than) trở nên phổ biến, các nhà máy dệt đầu tiên của CMCN 1.0 phải đặt gần sông để tận dụng sức nước."
  },
  {
    "id": "q38",
    "question": "Ngành công nghiệp nào bùng nổ trong CMCN 2.0 nhờ các phát minh về điện và động cơ đốt trong?",
    "options": [
      { "id": "q38-a", "text": "Công nghiệp ô tô", "isCorrect": true },
      { "id": "q38-b", "text": "Công nghiệp dệt", "isCorrect": false },
      { "id": "q38-c", "text": "Công nghiệp phần mềm", "isCorrect": false },
      { "id": "q38-d", "text": "Công nghiệp vũ trụ", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Động cơ đốt trong đã khai sinh ra ngành công nghiệp ô tô (Henry Ford), và điện đã cung cấp năng lượng cho các dây chuyền sản xuất hàng loạt."
  },
  {
    "id": "q39",
    "question": "Hệ thống điện tín (Telegraph) sử dụng mã Morse là một cuộc cách mạng truyền thông trong CMCN nào?",
    "options": [
      { "id": "q39-a", "text": "Cách mạng công nghiệp 1.0", "isCorrect": false },
      { "id": "q39-b", "text": "Cách mạng công nghiệp 2.0", "isCorrect": true },
      { "id": "q39-c", "text": "Cách mạng công nghiệp 3.0", "isCorrect": false },
      { "id": "q39-d", "text": "Cách mạng công nghiệp 4.0", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Điện tín (phát minh giữa thế kỷ 19) là công nghệ truyền thông tức thời đầu tiên, cho phép thông tin truyền đi nhanh hơn tốc độ con người/tàu hỏa, đặc trưng cho CMCN 2.0."
  },
  {
    "id": "q40",
    "question": "Sự khác biệt cơ bản giữa robot của CMCN 3.0 và CMCN 4.0 là gì?",
    "options": [
      { "id": "q40-a", "text": "Robot 3.0 dùng điện, robot 4.0 dùng hơi nước", "isCorrect": false },
      { "id": "q40-b", "text": "Robot 3.0 được lập trình (lặp lại), robot 4.0 có thể tự học (AI)", "isCorrect": true },
      { "id": "q40-c", "text": "Robot 3.0 lớn, robot 4.0 nhỏ", "isCorrect": false },
      { "id": "q40-d", "text": "Không có sự khác biệt, chúng giống hệt nhau", "isCorrect": false }
    ],
    "points": 10,
    "explanation": "Robot của CMCN 3.0 chủ yếu là các cánh tay máy được lập trình để thực hiện một nhiệm vụ lặp đi lặp lại. Robot 4.0 (Cobot) được tích hợp AI, cảm biến, kết nối IoT, có thể học hỏi, thích nghi và cộng tác với con người."
  }
];
