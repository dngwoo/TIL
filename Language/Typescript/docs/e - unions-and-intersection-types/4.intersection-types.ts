// 교차 타입 (Intersection Types)
// 일관된 에러를 다루는 여러 네트워크 요청이 있다면 해당 에러 핸들링을 분리하여 하나의 응답 타입에 대응하는 결합된 자체 타입으로 만들 수 있음.

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }
  
interface ArtworksData {
    artworks: { title: string }[];
}

interface ArtistsData {
    artists: { name: string }[];
}
  

type ArtworksResponse = ArtworksData & ErrorHandling; // 이렇게 만든다.
type ArtistsResponse = ArtistsData & ErrorHandling; // 이렇게 만든다.

const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
      console.error(response.error.message);
      return;
    }
  
    console.log(response.artists);
};

// error는 옵셔널 프로퍼티이기 때문에 상관없고 success와 artists는 두개다 들어가야 한다.
handleArtistsResponse({
    success: true,
    artists: [{name: 'dongwoo'}, {name: 'yugesh'}]
})