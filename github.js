class Github {
  constructor() {
    this.client_id = '0b42e2ca08f26b3a1c94';
    this.client_secret = '0be3cd4236fb8c23f48e41a175dcfe36bfe9f0d2';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}