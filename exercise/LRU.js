import { LinkList, Node } from "../src/code/1.LinkList";

export const generateLinkList = () => {
  new LinkList();
};
export class LRU {
  constructor(limitSize) {
    this.limitSize = limitSize;
    this.linklist = new LinkList();
  }

  add(element) {
    this.linklist.insert(element, 0);

    if (this.linklist.size() > this.limitSize) {
      this.linklist.removeAt(this.linklist.size() - 1);
    }
  }
}
