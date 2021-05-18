using AutoMapper;
using Moq;
using NUnit.Framework;
using Project5.Entities;
using Project5.Helpers;
using Project5.Repositories;
using Project5.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project5.Tests
{
    public class Tests
    {
        private Mock<IUserRepository> _mockUserRepo;
        private Mock<IPostRepository> _mockPostRepo;
        private MapperConfiguration _config;

        [SetUp]
        public void Setup()
        {
            _mockUserRepo = new Mock<IUserRepository>();
            _mockPostRepo = new Mock<IPostRepository>();
            _config = new MapperConfiguration(x => x.AddProfile<AutoMapperProfile>());
        }

        [TestCase(1)]
        [TestCase(2)]
        [TestCase(10)]
        [TestCase(45)]
        public async Task WhenGetUserAsyncIsCalled_ReturnUser(int id)
        {
            //Arrange

            User fakeUser = new User
            {
                City = "RealCity",
                Country = "RealCountry",
                Name = "Realman McrealPerson",
                CreatedAt = DateTime.Now
            };

            UserService service = new UserService(_mockUserRepo.Object, _config.CreateMapper());
            _mockUserRepo.Setup(x => x.GetUserAsync(It.IsAny<int>())).ReturnsAsync(fakeUser);

            //Act
            var user = await service.GetUserAsync(id);

            //Assert
            Assert.NotNull(user);
            Assert.AreEqual(user.Name, fakeUser.Name);
        }

        [Test]
        public async Task WhenGetUsersAsyncIsCalled_ReturnUserList()
        {
            //Arrange
            List<User> fakeUserList = new List<User>
            {
                new User
                {
                    City = "RealCity1",
                    Country = "RealCountry1",
                    Name = "Realman McrealPerson1",
                    CreatedAt = DateTime.Now
                },
                new User
                {
                    City = "RealCity2",
                    Country = "RealCountry2",
                    Name = "Realman McrealPerson2",
                    CreatedAt = DateTime.Now
                },
                new User
                {
                    City = "RealCity3",
                    Country = "RealCountry3",
                    Name = "Realman McrealPerson3",
                    CreatedAt = DateTime.Now
                }
            };

            UserService service = new UserService(_mockUserRepo.Object, _config.CreateMapper());
            _mockUserRepo.Setup(x => x.GetUsersAsync()).ReturnsAsync(fakeUserList);

            //Act
            var users = await service.GetUsersAsync();

            //Assert
            Assert.NotNull(fakeUserList);
            Assert.AreEqual(users.Count, 3);
            Assert.AreNotEqual(users.Count, 4);
        }

        [TestCase(3)]
        [TestCase(7)]
        [TestCase(11)]
        [TestCase(49)]
        public async Task WhenGetPostAsyncIsCalled_ReturnPost(int id)
        {
            //Arrange

            Post fakePost = new Post
            {
                Title = "RealPost",
                Content = "RealContent",
                IsNSFW = true,
                CreatedAt = DateTime.Now
            };

            PostService service = new PostService(_mockPostRepo.Object, _config.CreateMapper());
            _mockPostRepo.Setup(x => x.GetPostAsync(It.IsAny<int>())).ReturnsAsync(fakePost);

            //Act
            var post = await service.GetPostAsync(id);

            //Assert
            Assert.NotNull(post);
            Assert.AreEqual(post.Title, fakePost.Title);
        }

        [Test]
        public async Task WhenGetPostsAsyncIsCalled_ReturnPostsList()
        {
            //Arrange
            List<Post> fakePostsList = new List<Post>
            {
                new Post
                {
                    Title = "RealPost1",
                    Content = "RealContent1",
                    IsNSFW = true,
                    CreatedAt = DateTime.Now
                },
                new Post
                {
                   Title = "RealPost2",
                    Content = "RealContent2",
                    IsNSFW = true,
                    CreatedAt = DateTime.Now
                },
                new Post
                {
                    Title = "RealPost3",
                    Content = "RealContent3",
                    IsNSFW = true,
                    CreatedAt = DateTime.Now
                }
            };

            PostService service = new PostService(_mockPostRepo.Object, _config.CreateMapper());
            _mockPostRepo.Setup(x => x.GetPostsAsync()).ReturnsAsync(fakePostsList);

            //Act
            var posts = await service.GetPostsAsync();

            //Assert
            Assert.NotNull(fakePostsList);
            Assert.AreEqual(posts.Count, 3);
            Assert.AreNotEqual(posts.Count, 4);
        }

    }
}