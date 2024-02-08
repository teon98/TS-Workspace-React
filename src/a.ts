interface Person {
  name: string;
  age: number;
}

interface Develoepr {
  name: string;
  age: string;
}

interface Admin {
  name: string;
  age: boolean;
}

interface Anyone<T>{
  name: string;
  age: T;
}

const josh: Anyone<boolean> = {
  name: 'josh',
  age: false
}

//타입의 반복을 줄이기 위해서 제네릭을 사용한다.