// 유니온 구별하기 (Discriminating Unions) - switch문 사용
// 잘못하면 @errors: 2339 가 난다고 함.

// 공통 부분이 state이지만 값이 문자열 리터럴이기 때문에 "switch문"으로 구별해준다.
type NetworkLoadingState = {
    state: "loading"; // 공통
  };
  
  type NetworkFailedState = {
    state: "failed"; // 공통
    code: number;
  };
  
  type NetworkSuccessState = {
    state: "success"; // 공통
    response: {
      title: string;
      duration: number;
      summary: string;
    };
  };
  
  type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;
  
  function networkStatus(state: NetworkState): string {
    // 현재 TypeScript는 셋 중 어떤 것이
    // state가 될 수 있는 잠재적인 타입인지 알 수 없습니다.
  
    // 모든 타입에 공유되지 않는 프로퍼티에 접근하려는 시도는
    // 오류를 발생시킵니다.
    // state.code; // error 출력. state.code는  공통된 프로퍼티가 아니기 때문임.
  
    // state에 swtich문을 사용하여, TypeScript는 코드 흐름을 분석하면서
    // 유니언 타입을 좁혀나갈 수 있습니다.
    switch (state.state) {
      case "loading":
        return "Downloading...";
      case "failed":
        // 여기서 타입은 NetworkFailedState일 것이며,
        // 따라서 `code` 필드에 접근할 수 있습니다.
        return `Error ${state.code} downloading`;
      case "success":
        return `Downloaded ${state.response.title} - ${state.response.summary}`;
    }
  }