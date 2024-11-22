export class ArticleArchieveDateVO {
  value: Date;
  constructor(archieveDate: Date) {
    this.ensureArchieveDateIsCorrect(archieveDate);
    this.value = archieveDate;
  }

  private ensureArchieveDateIsCorrect(archieveDate) {}
}
