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
    id: "q1",
    question: "Cách mạng công nghiệp lần thứ nhất bắt đầu vào khoảng năm nào?",
    options: [
      { id: "q1-a", text: "1660", isCorrect: false },
      { id: "q1-b", text: "1760", isCorrect: true },
      { id: "q1-c", text: "1860", isCorrect: false },
      { id: "q1-d", text: "1960", isCorrect: false }
    ],
    points: 10,
    explanation: "Cách mạng công nghiệp lần thứ nhất bắt đầu vào khoảng năm 1760 tại Anh."
  },
  {
    id: "q2",
    question: "Ai là người phát minh ra máy hơi nước cải tiến?",
    options: [
      { id: "q2-a", text: "Thomas Edison", isCorrect: false },
      { id: "q2-b", text: "James Watt", isCorrect: true },
      { id: "q2-c", text: "Karl Benz", isCorrect: false },
      { id: "q2-d", text: "Alexander Graham Bell", isCorrect: false }
    ],
    points: 10,
    explanation: "James Watt đã cải tiến máy hơi nước vào năm 1769, tạo ra động lực quan trọng cho cách mạng công nghiệp."
  },
  {
    id: "q3",
    question: "Cách mạng công nghiệp lần thứ hai được đặc trưng bởi điều gì?",
    options: [
      { id: "q3-a", text: "Máy hơi nước", isCorrect: false },
      { id: "q3-b", text: "Điện và dầu mỏ", isCorrect: true },
      { id: "q3-c", text: "Internet", isCorrect: false },
      { id: "q3-d", text: "Trí tuệ nhân tạo", isCorrect: false }
    ],
    points: 10,
    explanation: "Cách mạng công nghiệp lần thứ hai (1870-1914) được đặc trưng bởi điện, dầu mỏ và sản xuất hàng loạt."
  },
  {
    id: "q4",
    question: "World Wide Web được phát minh bởi ai?",
    options: [
      { id: "q4-a", text: "Bill Gates", isCorrect: false },
      { id: "q4-b", text: "Steve Jobs", isCorrect: false },
      { id: "q4-c", text: "Tim Berners-Lee", isCorrect: true },
      { id: "q4-d", text: "Mark Zuckerberg", isCorrect: false }
    ],
    points: 10,
    explanation: "Tim Berners-Lee đã phát minh ra World Wide Web vào năm 1989 tại CERN."
  },
  {
    id: "q5",
    question: "Cách mạng công nghiệp lần thứ tư tập trung vào những công nghệ nào?",
    options: [
      { id: "q5-a", text: "AI, IoT, và Blockchain", isCorrect: true },
      { id: "q5-b", text: "Máy hơi nước", isCorrect: false },
      { id: "q5-c", text: "Điện thoại analog", isCorrect: false },
      { id: "q5-d", text: "Máy in", isCorrect: false }
    ],
    points: 10,
    explanation: "Cách mạng công nghiệp 4.0 kết hợp AI, IoT, blockchain và các công nghệ số tiên tiến."
  },
  {
    id: "q6",
    question: "iPhone được Apple giới thiệu vào năm nào?",
    options: [
      { id: "q6-a", text: "2005", isCorrect: false },
      { id: "q6-b", text: "2007", isCorrect: true },
      { id: "q6-c", text: "2010", isCorrect: false },
      { id: "q6-d", text: "2012", isCorrect: false }
    ],
    points: 10,
    explanation: "iPhone đầu tiên được Apple giới thiệu vào năm 2007, mở ra kỷ nguyên smartphone."
  },
  {
    id: "q7",
    question: "Cách mạng công nghiệp lần thứ ba còn được gọi là gì?",
    options: [
      { id: "q7-a", text: "Cách mạng hơi nước", isCorrect: false },
      { id: "q7-b", text: "Cách mạng điện", isCorrect: false },
      { id: "q7-c", text: "Cách mạng số", isCorrect: true },
      { id: "q7-d", text: "Cách mạng AI", isCorrect: false }
    ],
    points: 10,
    explanation: "Cách mạng công nghiệp lần thứ ba còn được gọi là Cách mạng số, đặc trưng bởi máy tính và internet."
  },
  {
    id: "q8",
    question: "Ô tô chạy bằng xăng đầu tiên được chế tạo bởi ai?",
    options: [
      { id: "q8-a", text: "Henry Ford", isCorrect: false },
      { id: "q8-b", text: "Karl Benz", isCorrect: true },
      { id: "q8-c", text: "Gottlieb Daimler", isCorrect: false },
      { id: "q8-d", text: "Ferdinand Porsche", isCorrect: false }
    ],
    points: 10,
    explanation: "Karl Benz đã chế tạo ô tô chạy bằng xăng đầu tiên vào năm 1886."
  }
];
