import { LinkList, Node } from "../src/code/1.LinkList";

export const generateLinkList = () => {
  new LinkList();
};
export class LRU {
  constructor(limitSize) {
    this.limitSize = limitSize;
    this.linklist = new LinkList();
  }

  get(element) {
    const index = this.linklist.indexOf(element);

    if (index !== -1) {
      this.linklist.removeAt(index);
      this.linklist.insert(element, 0);
    }
  }

  add(element) {
    this.linklist.insert(element, 0);

    if (this.linklist.size() > this.limitSize) {
      this.linklist.removeAt(this.linklist.size() - 1);
    }
  }
}
