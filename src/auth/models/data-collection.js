'use strict';

// THIS IS THE STRETCH GOAL ...
// It takes in a schema in the constructor and uses that instead of every collection
// being the same and requiring their own schema. That's not very DRY!

class DataCollection {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    try {
      if (id) {
        return await this.model.findOne({ id });
      } else {
        return await this.model.findAll({});
      }
    } catch (error) {
      console.error(
        "can not read the record/s on ",
        this.model.name,
        ` where id=${id}`
      );
    }
  }

  async create(record) {
    try {
      return await this.model.create(record);
    } catch (error) {
      console.error("can not create a new record on ", this.model.name);
    }
  }

  async update(id, data) {
    try {
      let currentRecord = await this.model.findOne({ where: { id } });
      let updatedRecord = await currentRecord.update(data);
      return updatedRecord;
    } catch (error) {}
  }

  async delete(id) {
    if (!id) {
      throw new Error("no id provided !, for model ", this.model.name);
    }
    try {
      let deletedRecord = await this.model.destroy({ where: { id } });
      return deletedRecord;
    } catch (error) {
      console.error(
        " can not delete the record on ",
        this.model.name,
        ` where is id=${id}`
      );
    }
  }
}

module.exports = DataCollection;