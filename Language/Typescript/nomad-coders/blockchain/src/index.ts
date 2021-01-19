import * as CryptoJS from 'crypto-js'; // ts에서 import 할때 이렇게 함.

class Block {
  static calculateBlockHash = (
    // Block.caculateBlockHash() 를 쓰기 위해선 static이 필수.
    // 여기에 굳이 메서드 형식으로 넣을 필요는 없는데 수업진행상 넣음. (class 바깥에 해줘도 상관x)
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  };

  static validateStructure = (aBlock: Block): boolean =>
    // 들어온 블록의 구조가 유효한지 아닌지 파악하는 메서드
    typeof aBlock.index === 'number' &&
    typeof aBlock.hash === 'string' &&
    typeof aBlock.previousHash === 'string' &&
    typeof aBlock.data === 'string' &&
    typeof aBlock.timestamp === 'number';

  index: number;
  hash: string;
  previousHash: string;
  data: string;
  timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, '202020202020', '', 'Hello', 123456);

const blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );
  addBlock(newBlock); // blockchain에 추가!
  return newBlock;
};

const getHashforBlock = (aBlock: Block): string =>
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    // 우리가 직접 해시를 계산한 값과 한번 더 비교
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    // 현재 블록과 제일 최근 블록을 가져와서 isBlockValid를 시킨다.
    blockchain.push(candidateBlock); // true라면 블록체인에 추가 시킨다.
  }
};

// 블록을 만들어보자!
createNewBlock('second block');
createNewBlock('third block');
createNewBlock('fourth block');

console.log(blockchain);
