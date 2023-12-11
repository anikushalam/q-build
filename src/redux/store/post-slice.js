import { createSlice } from "@reduxjs/toolkit";
const postChange = createSlice({
  name: "postChange",
  initialState: {
    dashboardPosts: [],
    profilePosts: [],
    profileSavedPosts: [],
    profileTagedPosts: [],
    comments: [],
    replyComments: [],
    searchPosts: [],
    answers: [],
  },
  reducers: {
    addPost(state, action) {
      if (action.payload?.post !== undefined) {
        if (action.payload?.profilePost === "dash") {
          const uniquePost = [...state.dashboardPosts, ...action.payload?.post];
          const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
            JSON.parse
          );
          for (let i = 0; i < uniqueRefind?.length; i++) {
            for (let j = i + 1; j < uniqueRefind?.length; j++) {
              if (uniqueRefind[i]._id === uniqueRefind[j]._id)
                uniqueRefind.splice(j, 1);
            }
          }
          state.dashboardPosts = uniqueRefind;
        } else if (action.payload?.profilePost === "profile") {
          const uniquePost = [...state.profilePosts, ...action.payload?.post];
          const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
            JSON.parse
          );
          for (let i = 0; i < uniqueRefind?.length; i++) {
            for (let j = i + 1; j < uniqueRefind?.length; j++) {
              if (uniqueRefind[i]._id === uniqueRefind[j]._id)
                uniqueRefind.splice(j, 1);
            }
          }
          state.profilePosts = uniqueRefind;
        } else if (action.payload?.profilePost === "saved") {
          const uniquePost = [
            ...state.profileSavedPosts,
            ...action.payload?.post,
          ];
          const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
            JSON.parse
          );
          for (let i = 0; i < uniqueRefind?.length; i++) {
            for (let j = i + 1; j < uniqueRefind?.length; j++) {
              if (uniqueRefind[i]._id === uniqueRefind[j]._id)
                uniqueRefind.splice(j, 1);
            }
          }
          state.profileSavedPosts = uniqueRefind;
        } else if (action.payload?.profilePost === "taged") {
          const uniquePost = [
            ...state.profileTagedPosts,
            ...action.payload?.post,
          ];
          const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
            JSON.parse
          );
          for (let i = 0; i < uniqueRefind?.length; i++) {
            for (let j = i + 1; j < uniqueRefind?.length; j++) {
              if (uniqueRefind[i]._id === uniqueRefind[j]._id)
                uniqueRefind.splice(j, 1);
            }
          }
          state.profileTagedPosts = uniqueRefind;
        } else {
          const uniquePost = [...state.searchPosts, ...action.payload?.post];
          const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
            JSON.parse
          );
          for (let i = 0; i < uniqueRefind?.length; i++) {
            for (let j = i + 1; j < uniqueRefind?.length; j++) {
              if (uniqueRefind[i]._id === uniqueRefind[j]._id)
                uniqueRefind.splice(j, 1);
            }
          }
          state.searchPosts = uniqueRefind;
        }
      }
    },
    addCreatedPost(state, action) {
      if (action.payload?.post !== undefined) {
        const uniquePost = [action.payload?.post, ...state.dashboardPosts];
        state.dashboardPosts = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        const uniquePost1 = [action.payload?.post, ...state.profilePosts];
        state.profilePosts = [...new Set(uniquePost1.map(JSON.stringify))].map(
          JSON.parse
        );
        if (action.payload?.postType === "repost") {
          let count = 0;
          for (let post of state.dashboardPosts) {
            if (post._id === action.payload?.pid) {
              const answer = state.dashboardPosts[count];
              answer.answerCount += 1;
            }
            ++count;
          }
          let countAgain = 0;

          for (let post of state.profilePosts) {
            if (post._id === action.payload?.pid) {
              const answer = state.profilePosts[countAgain];
              answer.answerCount += 1;
            }
            ++countAgain;
          }
          let countAgain2 = 0;
          for (let post of state.profileSavedPosts) {
            if (post._id === action.payload?.pid) {
              const answer = state.profileSavedPosts[countAgain2];
              answer.answerCount += 1;
            }
            ++countAgain2;
          }
          let countAgain1 = 0;

          for (let post of state.searchPosts) {
            if (post._id === action.payload?.pid) {
              const answer = state.searchPosts[countAgain1];
              answer.answerCount += 1;
            }
            ++countAgain1;
          }
        }
        // const uniquePost = [action.payload?.post, ...state.dashboardPosts];
        // state.dashboardPosts = uniquePost;
        // const uniquePost1 = [action.payload?.post, ...state.profilePosts];
        // state.profilePosts = uniquePost1;
      }
    },
    changeVisibility(state, action) {
      let count = 0;
      for (let post of state?.dashboardPosts) {
        if (post._id === action.payload.pid)
          state.dashboardPosts[count].postStatus = action.payload.status;
        count += 1;
      }
      let countAgain = 0;
      for (let post of state?.profilePosts) {
        if (post._id === action.payload.pid)
          state.profilePosts[countAgain].postStatus = action.payload.status;
        countAgain += 1;
      }
      let countAgain1 = 0;
      for (let post of state?.profileSavedPosts) {
        if (post._id === action.payload.pid)
          state.profileSavedPosts[countAgain1].postStatus =
            action.payload.status;
        countAgain1 += 1;
      }
    },
    deletePost(state, action) {
      let count = 0;
      for (let post of state?.dashboardPosts) {
        if (post._id === action.payload.pid)
          state.dashboardPosts.splice(count, 1);
        count += 1;
      }
      let countAgain = 0;
      for (let post of state?.profilePosts) {
        if (post._id === action.payload.pid)
          state.profilePosts.splice(countAgain, 1);
        countAgain += 1;
      }
      let countAgain1 = 0;
      for (let post of state?.profileSavedPosts) {
        if (post._id === action.payload.pid)
          state.profileSavedPosts.splice(countAgain1, 1);
        countAgain1 += 1;
      }
    },
    unfollowPost(state, action) {
      state.dashboardPosts = action.payload.posts;
    },

    followPost(state, action) {
      if (action.payload?.post !== undefined) {
        const uniquePost = [...state.dashboardPosts, ...action.payload?.post];
        state.dashboardPosts = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
      }
    },

    turnOffComment(state, action) {
      let count = 0;
      for (let post of state?.dashboardPosts) {
        if (post._id === action.payload.pid)
          state.dashboardPosts[count].comment_turned = action.payload.status;
        count += 1;
      }
      let countAgain = 0;
      for (let post of state?.profilePosts) {
        if (post._id === action.payload.pid)
          state.profilePosts[countAgain].comment_turned = action.payload.status;
        countAgain += 1;
      }
      let countAgain1 = 0;
      for (let post of state?.profileSavedPosts) {
        if (post._id === action.payload.pid)
          state.profileSavedPosts[countAgain1].comment_turned =
            action.payload.status;
        countAgain1 += 1;
      }
    },
    addLike(state, action) {
      let count = 0;
      for (let post of state?.dashboardPosts) {
        if (post._id === action.payload.pid) {
          state.dashboardPosts[count].likeCount += 1;
          state.dashboardPosts[count].endUserLike.push(action.payload.id);
        }
        count += 1;
      }
      let countAgain = 0;
      for (let post of state?.profilePosts) {
        if (post._id === action.payload.pid) {
          state.profilePosts[countAgain].likeCount += 1;
          state.profilePosts[countAgain].endUserLike.push(action.payload.id);
        }
        countAgain += 1;
      }
      let countAgain2 = 0;
      for (let post of state?.profileSavedPosts) {
        if (post._id === action.payload.pid) {
          state.profileSavedPosts[countAgain2].likeCount += 1;
          state.profileSavedPosts[countAgain2].endUserLike.push(
            action.payload.id
          );
        }
        countAgain2 += 1;
      }
      let countAgain1 = 0;
      for (let post of state?.searchPosts) {
        if (post._id === action.payload.pid) {
          state.searchPosts[countAgain1].likeCount += 1;
          state.searchPosts[countAgain1].endUserLike.push(action.payload.id);
        }
        countAgain1 += 1;
      }
    },

    removeLike(state, action) {
      let count = 0;
      for (let post of state?.dashboardPosts) {
        if (post._id === action.payload.pid) {
          state.dashboardPosts[count].likeCount -= 1;
          const index = state.dashboardPosts[count].endUserLike.indexOf(
            `${action.payload.id}`
          );
          state.dashboardPosts[count].endUserLike.splice(index, 1);
        }

        count += 1;
      }
      let countAgain = 0;
      for (let post of state?.profilePosts) {
        if (post._id === action.payload.id) {
          state.profilePosts[countAgain].likeCount -= 1;
          const index = state.profilePosts[countAgain].endUserLike.indexOf(
            `${action.payload.pid}`
          );
          state.profilePosts[countAgain].endUserLike.splice(index, 1);
        }
        countAgain += 1;
      }
      let countAgain2 = 0;
      for (let post of state?.profileSavedPosts) {
        if (post._id === action.payload.id) {
          state.profileSavedPosts[countAgain2].likeCount -= 1;
          const index = state.profileSavedPosts[
            countAgain2
          ].endUserLike.indexOf(`${action.payload.pid}`);
          state.profileSavedPosts[countAgain2].endUserLike.splice(index, 1);
        }
        countAgain2 += 1;
      }
      let countAgain1 = 0;
      for (let post of state?.searchPosts) {
        if (post._id === action.payload.id) {
          state.searchPosts[countAgain1].likeCount -= 1;
          const index = state.searchPosts[countAgain1].endUserLike.indexOf(
            `${action.payload.pid}`
          );
          state.searchPosts[countAgain1].endUserLike.splice(index, 1);
        }
        countAgain1 += 1;
      }
    },

    addSave(state, action) {
      let count = 0;
      for (let post of state?.dashboardPosts) {
        if (post._id === action.payload.pid)
          state.dashboardPosts[count].endUserSave.push(action.payload.id);
        count += 1;
      }
      let countAgain = 0;
      for (let post of state?.profilePosts) {
        if (post._id === action.payload.pid)
          state.profilePosts[countAgain].endUserSave.push(action.payload.id);
        countAgain += 1;
      }
      let countAgain1 = 0;
      for (let post of state?.searchPosts) {
        if (post._id === action.payload.pid)
          state.searchPosts[countAgain1].endUserSave.push(action.payload.id);
        countAgain1 += 1;
      }
    },

    removeSave(state, action) {
      let count = 0;
      for (let post of state?.dashboardPosts) {
        if (post._id === action.payload.pid) {
          const index = state.dashboardPosts[count].endUserSave.indexOf(
            `${action.payload.id}`
          );
          state.dashboardPosts[count].endUserSave.splice(index, 1);
        }
        count += 1;
      }
      let countAgain = 0;
      for (let post of state?.profilePosts) {
        if (post._id === action.payload.pid) {
          const index = state.profilePosts[countAgain].endUserSave.indexOf(
            `${action.payload.id}`
          );
          state.profilePosts[countAgain].endUserSave.splice(index, 1);
        }
        countAgain += 1;
      }

      let countAgain2 = 0;
      for (let post of state?.profileSavedPosts) {
        if (post._id === action.payload.pid) {
          const index = state.profileSavedPosts[
            countAgain2
          ].endUserSave.indexOf(`${action.payload.id}`);
          state.profileSavedPosts[countAgain2].endUserSave.splice(index, 1);
        }
        countAgain += 1;
      }

      let countAgain1 = 0;
      for (let post of state?.searchPosts) {
        if (post._id === action.payload.pid) {
          const index = state.searchPosts[countAgain1].endUserSave.indexOf(
            `${action.payload.id}`
          );
          state.searchPosts[countAgain1].endUserSave.splice(index, 1);
        }
        countAgain += 1;
      }
    },

    addComment(state, action) {
      if (action.payload?.comment !== undefined) {
        let count = 0;
        let flag = false;
        for (let comm of state?.comments) {
          if (comm.postId === action.payload?.postId) {
            flag = true;
            // const uniqueComments = [
            //   ...comm.comment,
            //   ...action.payload?.comment,
            // ];
            // state.comments[count].comment = [
            //   ...new Set(uniqueComments.map(JSON.stringify)),
            // ].map(JSON.parse);
            const uniquePost = [...comm.comment, ...action.payload?.comment];
            const uniqueRefind = [
              ...new Set(uniquePost.map(JSON.stringify)),
            ].map(JSON.parse);
            for (let i = 0; i < uniqueRefind?.length; i++) {
              for (let j = i + 1; j < uniqueRefind?.length; j++) {
                if (uniqueRefind[i]._id === uniqueRefind[j]._id)
                  uniqueRefind.splice(j, 1);
              }
            }
            state.comments[count].comment = uniqueRefind;
          }

          count += 1;
        }
        if (!flag) {
          state.comments.push({
            postId: action.payload?.postId,
            comment: [...action.payload?.comment],
          });
        }
      }
    },

    addCreatedComment(state, action) {
      if (action.payload?.comment !== undefined) {
        let count = 0;
        let flag = false;

        for (let comm of state?.comments) {
          if (comm.postId === action.payload?.postId) {
            flag = true;

            const uniqueComments = [action.payload?.comment, ...comm.comment];
            state.comments[count].comment = [
              ...new Set(uniqueComments.map(JSON.stringify)),
            ].map(JSON.parse);

            let countAgain = 0;
            for (let post of state.dashboardPosts) {
              if (post._id === action.payload?.postId) {
                state.dashboardPosts[countAgain].commentCount += 1;
              }
              countAgain += 1;
            }
            let countAgain2 = 0;
            for (let post of state.profilePosts) {
              if (post._id === action.payload?.postId) {
                state.profilePosts[countAgain2].commentCount += 1;
              }
              countAgain2 += 1;
            }
          }
          count += 1;
        }
        if (!flag) {
          state.comments.push({
            postId: action.payload?.postId,
            comment: [action.payload?.comment],
          });
          let countAgain = 0;
          for (let post of state.dashboardPosts) {
            if (post._id === action.payload?.postId) {
              state.dashboardPosts[countAgain].commentCount += 1;
            }
            countAgain += 1;
          }
          let countAgain2 = 0;
          for (let post of state.profilePosts) {
            if (post._id === action.payload?.postId) {
              state.profilePosts[countAgain2].commentCount += 1;
            }
            countAgain2 += 1;
          }
        }
      }
    },
    addCommentLike(state, action) {
      let count = 0;
      for (let comm of state?.comments) {
        if (comm.postId === action.payload?.postId) {
          let countAgain = 0;

          for (let like of comm.comment) {
            if (like._id === action.payload.commentId)
              state.comments[count].comment[countAgain].allLikeCount =
                action.payload?.like;
            countAgain += 1;
          }
        }
        count += 1;
      }
    },

    addReplyComment(state, action) {
      if (action.payload?.reply !== undefined) {
        let count = 0;
        let flag = false;
        for (let comm of state?.replyComments) {
          if (comm.commentId === action.payload?.commentId) {
            flag = true;
            // const uniqueComments = [...comm.reply, ...action.payload?.reply];
            //             state.replyComments[count].reply = [
            //               ...new Set(uniqueComments.map(JSON.stringify)),
            //             ].map(JSON.parse);
            const uniquePost = [...comm.reply, ...action.payload?.reply];
            const uniqueRefind = [
              ...new Set(uniquePost.map(JSON.stringify)),
            ].map(JSON.parse);
            for (let i = 0; i < uniqueRefind?.length; i++) {
              for (let j = i + 1; j < uniqueRefind?.length; j++) {
                if (uniqueRefind[i]._id === uniqueRefind[j]._id)
                  uniqueRefind.splice(j, 1);
              }
            }
            state.replyComments[count].reply = uniqueRefind;
          }
          count += 1;
        }
        if (!flag) {
          state.replyComments.push({
            commentId: action.payload?.commentId,
            reply: [...action.payload?.reply],
          });
        }
      }
    },

    addReplyCreatedComment(state, action) {
      if (action.payload?.reply !== undefined) {
        let count = 0;
        let flag = false;

        for (let comm of state?.replyComments) {
          if (comm.commentId === action.payload?.commentId) {
            flag = true;

            const uniqueComments = [action.payload?.reply, ...comm.reply];
            state.replyComments[count].reply = [
              ...new Set(uniqueComments.map(JSON.stringify)),
            ].map(JSON.parse);
          }
          count += 1;
        }
        if (!flag) {
          state.replyComments.push({
            commentId: action.payload?.commentId,
            reply: [action.payload?.reply],
          });
        }
      }
    },
    addReplyCommentCount(state, action) {
      let count = 0;
      for (let comm of state?.comments) {
        if (comm.postId === action.payload?.postId) {
          let countAgain = 0;
          for (let like of comm.comment) {
            if (like._id === action.payload.commentId)
              state.comments[count].comment[
                countAgain
              ].allChildCommentCount += 1;
            countAgain += 1;
          }
        }
        count += 1;
      }
    },

    removeSearchPost(state, action) {
      state.searchPosts = action.payload.search;
    },

    pollVote(state, action) {
      let count = 0;
      for (let post of state?.dashboardPosts) {
        if (post._id === action.payload.pid) {
          const poll = state.dashboardPosts[count].poll_query;
          for (let i = 0; i < poll.poll_answer.length; i++) {
            if (poll.poll_answer[i]._id === action.payload.aid) {
              poll.total_votes += 1;
              poll.poll_answer[i].users.push(action.payload.id);
              poll.answeredUser.push(action.payload.id);
              poll.poll_answer[i].percent_vote = Math.round(
                (poll.poll_answer[i].users.length * 100) / poll.total_votes
              );
              for (let k = 0; k < poll.poll_answer.length; k++) {
                if (poll.poll_answer[k]._id !== action.payload.aid) {
                  poll.poll_answer[k].percent_vote = Math.round(
                    (poll.poll_answer[k].users.length * 100) / poll.total_votes
                  );
                }
              }
            }
          }
        }
        count += 1;
      }
      let countAgain = 0;
      for (let post of state?.profilePosts) {
        if (post._id === action.payload.pid) {
          const poll = state.profilePosts[countAgain].poll_query;
          for (let i = 0; i < poll.poll_answer.length; i++) {
            if (poll.poll_answer[i]._id === action.payload.aid) {
              poll.total_votes += 1;
              poll.poll_answer[i].users.push(action.payload.id);
              poll.answeredUser.push(action.payload.id);
              poll.poll_answer[i].percent_vote = Math.round(
                (poll.poll_answer[i].users.length * 100) / poll.total_votes
              );
              for (let k = 0; k < poll.poll_answer.length; k++) {
                if (poll.poll_answer[k]._id !== action.payload.aid) {
                  poll.poll_answer[k].percent_vote = Math.round(
                    (poll.poll_answer[k].users.length * 100) / poll.total_votes
                  );
                }
              }
            }
          }
        }
        countAgain += 1;
      }
      let countAgain2 = 0;
      for (let post of state?.profileSavedPosts) {
        if (post._id === action.payload.pid) {
          const poll = state.profileSavedPosts[countAgain2].poll_query;
          for (let i = 0; i < poll.poll_answer.length; i++) {
            if (poll.poll_answer[i]._id === action.payload.aid) {
              poll.total_votes += 1;
              poll.poll_answer[i].users.push(action.payload.id);
              poll.answeredUser.push(action.payload.id);
              poll.poll_answer[i].percent_vote = Math.round(
                (poll.poll_answer[i].users.length * 100) / poll.total_votes
              );
              for (let k = 0; k < poll.poll_answer.length; k++) {
                if (poll.poll_answer[k]._id !== action.payload.aid) {
                  poll.poll_answer[k].percent_vote = Math.round(
                    (poll.poll_answer[k].users.length * 100) / poll.total_votes
                  );
                }
              }
            }
          }
        }
        countAgain2 += 1;
      }
      let countAgain1 = 0;
      for (let post of state?.searchPosts) {
        if (post._id === action.payload.pid) {
          const poll = state.searchPosts[countAgain1].poll_query;
          for (let i = 0; i < poll.poll_answer.length; i++) {
            if (poll.poll_answer[i]._id === action.payload.aid) {
              poll.total_votes += 1;
              poll.poll_answer[i].users.push(action.payload.id);
              poll.answeredUser.push(action.payload.id);
              poll.poll_answer[i].percent_vote = Math.round(
                (poll.poll_answer[i].users.length * 100) / poll.total_votes
              );
              for (let k = 0; k < poll.poll_answer.length; k++) {
                if (poll.poll_answer[k]._id !== action.payload.aid) {
                  poll.poll_answer[k].percent_vote = Math.round(
                    (poll.poll_answer[k].users.length * 100) / poll.total_votes
                  );
                }
              }
            }
          }
        }
        countAgain1 += 1;
      }
    },

    questionNeedHelp(state, action) {
      let count = 0;
      for (let post of state?.dashboardPosts) {
        if (post._id === action.payload.pid) {
          const need = state.dashboardPosts[count];
          if (action.payload.type === "need") {
            need.needUser.push(action.payload.id);
            need.needCount += 1;
          } else {
            need.needUser = need.needUser.filter(
              (val) => val !== action.payload.id
            );
            need.needCount -= 1;
          }
        }
        count += 1;
      }
      let countAgain = 0;
      for (let post of state?.profilePosts) {
        if (post._id === action.payload.pid) {
          const need = state.profilePosts[countAgain];
          if (action.payload.type === "need") {
            need.needUser.push(action.payload.id);
            need.needCount += 1;
          } else {
            need.needUser = need.needUser.filter(
              (val) => val !== action.payload.id
            );
            need.needCount -= 1;
          }
        }
        countAgain += 1;
      }
      let countAgain2 = 0;
      for (let post of state?.profileSavedPosts) {
        if (post._id === action.payload.pid) {
          const need = state.profileSavedPosts[countAgain2];
          if (action.payload.type === "need") {
            need.needUser.push(action.payload.id);
            need.needCount += 1;
          } else {
            need.needUser = need.needUser.filter(
              (val) => val !== action.payload.id
            );
            need.needCount -= 1;
          }
        }
        countAgain2 += 1;
      }
      let countAgain1 = 0;
      for (let post of state?.searchPosts) {
        if (post._id === action.payload.pid) {
          const need = state.searchPosts[countAgain1];
          if (action.payload.type === "need") {
            need.needUser.push(action.payload.id);
            need.needCount += 1;
          } else {
            need.needUser = need.needUser.filter(
              (val) => val !== action.payload.id
            );
            need.needCount -= 1;
          }
        }
        countAgain1 += 1;
      }
    },

    repostAnswerVote(state, action) {
      let count = 0;
      for (let post of state?.dashboardPosts) {
        if (post._id === action.payload.pid) {
          const vote = state.dashboardPosts[count].rePostAnswer;
          if (action.payload.type === "vote") {
            vote.upVote.push(action.payload.id);
            vote.upVoteCount += 1;
          } else {
            vote.upVote = vote.upVote.filter(
              (val) => val !== action.payload.id
            );
            vote.upVoteCount -= 1;
          }
        }
        count += 1;
      }
      let countAgain = 0;
      for (let post of state?.profilePosts) {
        if (post._id === action.payload.pid) {
          const vote = state.profilePosts[countAgain].rePostAnswer;
          if (action.payload.type === "vote") {
            vote.upVote.push(action.payload.id);
            vote.upVoteCount += 1;
          } else {
            vote.upVote = vote.upVote.filter(
              (val) => val !== action.payload.id
            );
            vote.upVoteCount -= 1;
          }
        }
        countAgain += 1;
      }
      let countAgain2 = 0;
      for (let post of state?.profileSavedPosts) {
        if (post._id === action.payload.pid) {
          const vote = state.profileSavedPosts[countAgain2].rePostAnswer;
          if (action.payload.type === "vote") {
            vote.upVote.push(action.payload.id);
            vote.upVoteCount += 1;
          } else {
            vote.upVote = vote.upVote.filter(
              (val) => val !== action.payload.id
            );
            vote.upVoteCount -= 1;
          }
        }
        countAgain2 += 1;
      }
      let countAgain1 = 0;
      for (let post of state?.searchPosts) {
        if (post._id === action.payload.pid) {
          const vote = state.searchPosts[countAgain1].rePostAnswer;
          if (action.payload.type === "vote") {
            vote.upVote.push(action.payload.id);
            vote.upVoteCount += 1;
          } else {
            vote.upVote = vote.upVote.filter(
              (val) => val !== action.payload.id
            );
            vote.upVoteCount -= 1;
          }
        }
        countAgain1 += 1;
      }
    },

    addAnswer(state, action) {
      if (action.payload?.answer !== undefined) {
        let count = 0;
        let flag = false;
        for (let ans of state?.answers) {
          if (ans.postId === action.payload?.postId) {
            flag = true;
            const uniquePost = [...ans.answer, ...action.payload?.answer];
            const uniqueRefind = [
              ...new Set(uniquePost.map(JSON.stringify)),
            ].map(JSON.parse);
            for (let i = 0; i < uniqueRefind?.length; i++) {
              for (let j = i + 1; j < uniqueRefind?.length; j++) {
                if (uniqueRefind[i]._id === uniqueRefind[j]._id)
                  uniqueRefind.splice(j, 1);
              }
            }
            state.answers[count].answer = uniqueRefind;
          }

          count += 1;
        }
        if (!flag) {
          state.answers.push({
            postId: action.payload?.postId,
            answer: [...action.payload?.answer],
          });
        }
      }
    },

    addCreatedAnswer(state, action) {
      if (action.payload?.answer !== undefined) {
        let count = 0;
        let flag = false;
        for (let ans of state?.answers) {
          if (ans.postId === action.payload?.postId) {
            flag = true;

            const uniqueAnswers = [action.payload?.answer, ...ans.answer];
            state.answers[count].answer = [
              ...new Set(uniqueAnswers.map(JSON.stringify)),
            ].map(JSON.parse);

            let countAgain = 0;
            for (let post of state.dashboardPosts) {
              if (post._id === action.payload?.postId) {
                state.dashboardPosts[countAgain].answerCount += 1;
              }
              countAgain += 1;
            }
            let countAgain2 = 0;
            for (let post of state.profilePosts) {
              if (post._id === action.payload?.postId) {
                state.profilePosts[countAgain2].answerCount += 1;
              }
              countAgain2 += 1;
            }
          }
          count += 1;
        }
        if (!flag) {
          state.answers.push({
            postId: action.payload?.postId,
            answer: [action.payload?.answer],
          });
          let countAgain = 0;
          for (let post of state.dashboardPosts) {
            if (post._id === action.payload?.postId) {
              state.dashboardPosts[countAgain].answerCount += 1;
            }
            countAgain += 1;
          }
          let countAgain2 = 0;
          for (let post of state.profilePosts) {
            if (post._id === action.payload?.postId) {
              state.profilePosts[countAgain2].answerCount += 1;
            }
            countAgain2 += 1;
          }
        }
      }
    },

    answerHelpfull(state, action) {
      let count = 0;
      for (let ans of state?.answers) {
        if (ans.postId === action.payload.pid) {
          let countAgain = 0;
          for (let answ of ans.answer) {
            if (answ._id === action.payload.aid) {
              const helpful = state.answers[count].answer[countAgain];
              if (action.payload.type === "helpfull") {
                helpful.upVote.push(action.payload.id);
                helpful.upVoteCount += 1;
              } else {
                helpful.upVote = helpful?.upVote?.filter(
                  (val) => val !== action.payload.id
                );
                helpful.upVoteCount -= 1;
              }
            }
            ++countAgain;
          }
        }
        ++count;
      }
    },
  },
});

export const postChangeAction = postChange.actions;

export default postChange.reducer;
